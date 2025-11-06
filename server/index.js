const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? 'https://esadyesilyurt.github.io' 
      : 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  },
  transports: ['websocket', 'polling']
})

app.use(cors())
app.use(express.json())

const rooms = new Map() // roomId -> Set of socketIds
const users = new Map() // socketId -> { username, roomId }

io.on('connection', (socket) => {
  console.log('Kullanıcı bağlandı:', socket.id)

  socket.on('join-room', ({ username, roomId }) => {
    // Eski odadan çık
    const oldRoomId = users.get(socket.id)?.roomId
    if (oldRoomId) {
      leaveRoom(socket, oldRoomId)
    }

    // Yeni odaya katıl
    if (!rooms.has(roomId)) {
      rooms.set(roomId, new Set())
    }
    
    rooms.get(roomId).add(socket.id)
    users.set(socket.id, { username, roomId })

    socket.join(roomId)

    // Odadaki diğer kullanıcılara bildir
    const roomUsers = Array.from(rooms.get(roomId))
      .filter(id => id !== socket.id)
      .map(id => ({
        id,
        username: users.get(id)?.username
      }))

    socket.emit('room-users', roomUsers)

    // Diğer kullanıcılara yeni kullanıcıyı bildir
    socket.to(roomId).emit('user-joined', {
      userId: socket.id,
      username
    })

    console.log(`${username} odaya katıldı: ${roomId}`)
  })

  socket.on('offer', ({ offer, to }) => {
    socket.to(to).emit('offer', { offer, from: socket.id })
  })

  socket.on('answer', ({ answer, to }) => {
    socket.to(to).emit('answer', { answer, from: socket.id })
  })

  socket.on('ice-candidate', ({ candidate, to }) => {
    socket.to(to).emit('ice-candidate', { candidate, from: socket.id })
  })

  socket.on('disconnect', () => {
    const userInfo = users.get(socket.id)
    if (userInfo) {
      const { roomId, username } = userInfo
      leaveRoom(socket, roomId)
      console.log(`${username} ayrıldı`)
    }
    users.delete(socket.id)
  })

  function leaveRoom(socket, roomId) {
    if (rooms.has(roomId)) {
      rooms.get(roomId).delete(socket.id)
      if (rooms.get(roomId).size === 0) {
        rooms.delete(roomId)
      }
    }
    socket.to(roomId).emit('user-left', { userId: socket.id })
    socket.leave(roomId)
  }
})

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`)
})


