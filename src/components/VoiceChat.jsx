import { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import './VoiceChat.css'

const SOCKET_URL = process.env.NODE_ENV === 'production' 
  ? 'heyconim-production.up.railway.app' 
  : 'http://localhost:3001'

function VoiceChat({ username, onLogout }) {
  const [isConnected, setIsConnected] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isDeafened, setIsDeafened] = useState(false)
  const [users, setUsers] = useState([])
  const [roomId, setRoomId] = useState('')
  
  const socketRef = useRef(null)
  const localStreamRef = useRef(null)
  const peerConnectionsRef = useRef({})
  const audioContextRef = useRef(null)

  useEffect(() => {
    // Socket.io bağlantısı
    socketRef.current = io(SOCKET_URL, {
      transports: ['websocket']
    })

    socketRef.current.on('connect', () => {
      setIsConnected(true)
      socketRef.current.emit('join-room', { username, roomId: roomId || 'default' })
    })

    socketRef.current.on('room-users', (roomUsers) => {
      setUsers(roomUsers)
      roomUsers.forEach(user => {
        createPeerConnection(user.id, true)
      })
    })

    socketRef.current.on('user-joined', ({ userId, username: name }) => {
      setUsers(prev => [...prev, { id: userId, username: name }])
      createPeerConnection(userId, true)
    })

    socketRef.current.on('user-left', ({ userId }) => {
      setUsers(prev => prev.filter(u => u.id !== userId))
      if (peerConnectionsRef.current[userId]) {
        peerConnectionsRef.current[userId].close()
        delete peerConnectionsRef.current[userId]
      }
    })

    socketRef.current.on('offer', async ({ offer, from }) => {
      await handleOffer(offer, from)
    })

    socketRef.current.on('answer', async ({ answer, from }) => {
      await handleAnswer(answer, from)
    })

    socketRef.current.on('ice-candidate', async ({ candidate, from }) => {
      await handleIceCandidate(candidate, from)
    })

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect()
      }
      stopMediaStream()
    }
  }, [username, roomId])

  const startMediaStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      })
      localStreamRef.current = stream
      
      // Yerel sesi çalmayı engelle (echo önleme)
      const audioTracks = stream.getAudioTracks()
      audioTracks.forEach(track => {
        track.enabled = !isMuted
      })
    } catch (error) {
      console.error('Mikrofon erişimi hatası:', error)
      alert('Mikrofon erişimi reddedildi. Lütfen tarayıcı ayarlarından izin verin.')
    }
  }

  const stopMediaStream = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop())
      localStreamRef.current = null
    }
  }

  const createPeerConnection = async (userId, isInitiator) => {
    if (!localStreamRef.current) {
      await startMediaStream()
    }

    const configuration = {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' }
      ]
    }

    const peerConnection = new RTCPeerConnection(configuration)
    peerConnectionsRef.current[userId] = peerConnection

    // Yerel stream'i ekle
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStreamRef.current)
      })
    }

    // Uzak stream'i al
    peerConnection.ontrack = (event) => {
      const [remoteStream] = event.streams
      const audio = new Audio()
      audio.srcObject = remoteStream
      audio.autoplay = true
      audio.volume = isDeafened ? 0 : 1
      audio.play().catch(e => console.error('Ses çalma hatası:', e))
    }

    // ICE candidate'ları gönder
    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socketRef.current.emit('ice-candidate', {
          candidate: event.candidate,
          to: userId
        })
      }
    }

    if (isInitiator) {
      try {
        const offer = await peerConnection.createOffer()
        await peerConnection.setLocalDescription(offer)
        socketRef.current.emit('offer', {
          offer,
          to: userId
        })
      } catch (error) {
        console.error('Offer oluşturma hatası:', error)
      }
    }
  }

  const handleOffer = async (offer, from) => {
    await createPeerConnection(from, false)
    const peerConnection = peerConnectionsRef.current[from]
    await peerConnection.setRemoteDescription(new RTCSessionDescription(offer))
    
    const answer = await peerConnection.createAnswer()
    await peerConnection.setLocalDescription(answer)
    
    socketRef.current.emit('answer', {
      answer,
      to: from
    })
  }

  const handleAnswer = async (answer, from) => {
    const peerConnection = peerConnectionsRef.current[from]
    if (peerConnection) {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(answer))
    }
  }

  const handleIceCandidate = async (candidate, from) => {
    const peerConnection = peerConnectionsRef.current[from]
    if (peerConnection) {
      await peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
    }
  }

  const toggleMute = () => {
    if (localStreamRef.current) {
      const audioTracks = localStreamRef.current.getAudioTracks()
      audioTracks.forEach(track => {
        track.enabled = isMuted
      })
    }
    setIsMuted(!isMuted)
  }

  const toggleDeafen = () => {
    setIsDeafened(!isDeafened)
    // Tüm sesleri kapat/aç
    document.querySelectorAll('audio').forEach(audio => {
      audio.volume = isDeafened ? 1 : 0
    })
  }

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      socketRef.current.emit('join-room', { username, roomId: roomId.trim() })
    }
  }

  return (
    <div className="voice-chat">
      <div className="voice-chat-header">
        <h2>🎤 Sesli Konuşma</h2>
        <div className="header-info">
          <span className={`status ${isConnected ? 'connected' : 'disconnected'}`}>
            {isConnected ? '● Bağlı' : '○ Bağlantı Yok'}
          </span>
          <span className="username">{username}</span>
          <button onClick={onLogout} className="logout-btn">Çıkış</button>
        </div>
      </div>

      <div className="voice-chat-content">
        <div className="sidebar">
          <div className="room-section">
            <h3>Oda</h3>
            <div className="room-input-group">
              <input
                type="text"
                placeholder="Oda ID girin"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="room-input"
              />
              <button onClick={handleJoinRoom} className="join-btn">Katıl</button>
            </div>
          </div>

          <div className="users-section">
            <h3>Kullanıcılar ({users.length + 1})</h3>
            <div className="user-list">
              <div className="user-item current-user">
                <span className="user-icon">👤</span>
                <span className="user-name">{username} (Sen)</span>
                <span className="user-status speaking">●</span>
              </div>
              {users.map(user => (
                <div key={user.id} className="user-item">
                  <span className="user-icon">👤</span>
                  <span className="user-name">{user.username}</span>
                  <span className="user-status">●</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="welcome-message">
            <h1>Hoş Geldiniz! 👋</h1>
            <p>Sesli konuşmaya başlamak için mikrofonunuzu açın</p>
            <button onClick={startMediaStream} className="start-mic-btn">
              🎤 Mikrofonu Başlat
            </button>
          </div>
        </div>
      </div>

      <div className="voice-chat-controls">
        <button
          onClick={toggleMute}
          className={`control-btn ${isMuted ? 'muted' : ''}`}
          title={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
        >
          {isMuted ? '🔇' : '🎤'}
        </button>
        <button
          onClick={toggleDeafen}
          className={`control-btn ${isDeafened ? 'deafened' : ''}`}
          title={isDeafened ? 'Sesi Aç' : 'Sesi Kapat'}
        >
          {isDeafened ? '🔈' : '🔊'}
        </button>
      </div>
    </div>
  )
}

export default VoiceChat

