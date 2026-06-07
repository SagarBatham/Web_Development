import { useContext, useEffect, useRef } from 'react';
import { ChatContext } from '../../context/ChatContext';
import Message from './Message';
import ChatInput from './ChatInput';
import './ChatWindow.css';

export default function ChatWindow() {
  const { activeChat, getCurrentChat } = useContext(ChatContext);
  const messagesEndRef = useRef(null);
  const currentChat = getCurrentChat();

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentChat?.messages]);

  if (!activeChat || !currentChat) {
    return (
      <div className="chat-window">
        <div className="empty-state">
          <div className="empty-icon">💬</div>
          <h1>Start a New Conversation</h1>
          <p>Select a chat or create a new one to begin</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="messages-container">
        {currentChat.messages.length === 0 ? (
          <div className="welcome-message">
            <div className="welcome-icon">🤖</div>
            <h2>Welcome to IkAIris Chat</h2>
            <p>Start a conversation by typing your message below</p>
          </div>
        ) : (
          <div className="messages-list">
            {currentChat.messages.map(message => (
              <Message key={message._id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      <ChatInput />
    </div>
  );
}
