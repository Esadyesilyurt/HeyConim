import { useState } from 'react'
import './Login.css'

function Login({ onLogin }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(input)
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>🎤 Sesli Konuşma</h1>
        <p>Discord benzeri sesli konuşma platformuna hoş geldiniz</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Kullanıcı adınızı girin"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="login-input"
            maxLength={20}
          />
          <button type="submit" className="login-button">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login


