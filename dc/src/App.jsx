import { useState, useEffect } from 'react'
import VoiceChat from './components/VoiceChat'
import Login from './components/Login'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (name) => {
    if (name.trim()) {
      setUsername(name.trim())
      setIsLoggedIn(true)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
  }

  return (
    <div className="app">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <VoiceChat username={username} onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App


