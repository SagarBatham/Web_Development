import { useEffect, useRef, useState } from 'react'
import './App.css'
import { io } from "socket.io-client"

const formatTime = (date) =>
  date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })

function App() {

  const [socket, setSocket] = useState(null)

  const [messages, setMessages] = useState([])

  const [input, setInput] = useState('')

  const [typing, setTyping] = useState(false)

  const endRef = useRef(null)

  useEffect(() => {

    const socketInstance = io("http://localhost:3000")

    setSocket(socketInstance)

    socketInstance.on("ResponseAi", (response) => {

      const botmsg = {
        id: Date.now(),
        text: response.res,
        time: formatTime(new Date()),
        author: 'bot'
      }

      setMessages((prev) => [...prev, botmsg])

      setTyping(false)
    })

    return () => {
      socketInstance.disconnect()
    }

  }, [])

  const addMessage = (author, text) => {

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        author,
        text,
        time: formatTime(new Date())
      }
    ])
  }

  const handleSend = (event) => {

    event.preventDefault()

    const trimmed = input.trim()

    if (!trimmed || !socket) return

    addMessage('user', trimmed)

    socket.emit("message", {
      prompt: trimmed
    })

    setInput('')

    setTyping(true)
  }

  return (
    <div className="app-shell">

      <div className="chat-container">

        <div className="chat-header">
          <div>
            <p className="chat-label">Chat</p>
            <h1>Chat Interface</h1>
          </div>
        </div>

        <div className="chat-window">

          <div className="message-list">

            {messages.map((message) => (

              <div
                key={message.id}
                className={`message-row ${message.author}`}
              >

                <div className="message-bubble">
                  <p>{message.text}</p>
                  <span>{message.time}</span>
                </div>

              </div>
            ))}

            {typing && (
              <div className="message-row bot">
                <div className="message-bubble message-typing">
                  Typing...
                </div>
              </div>
            )}

            <div ref={endRef} />

          </div>

          <form
            className="chat-form"
            onSubmit={handleSend}
          >

            <input
              className="chat-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write your message..."
            />

            <button
              type="submit"
              className="chat-button"
            >
              Send
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default App