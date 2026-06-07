import { useContext, useState, useEffect } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { useSocket } from '../../context/useSocket';
import './ChatInput.css';

export default function ChatInput() {
  const { sendChatMessage, updateChatTitle, activeChat, chats } = useContext(ChatContext);
  const { onMessage, offMessage } = useSocket();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Listen for AI responses and errors to reset loading state
  useEffect(() => {
    const handleAiResponse = () => {
      setIsLoading(false);
    };

    const handleAiError = () => {
      setIsLoading(false);
    };

    onMessage('ai-response', handleAiResponse);
    onMessage('ai-error', handleAiError);

    return () => {
      offMessage('ai-response', handleAiResponse);
      offMessage('ai-error', handleAiError);
    };
  }, [onMessage, offMessage]);

  // Generate a title from the user's message
  const generateChatTitle = (message) => {
    const words = message.split(' ').slice(0, 4).join(' ');
    return words.length > 0 ? words + (message.split(' ').length > 4 ? '...' : '') : 'New Chat';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const currentChat = chats.find(chat => chat._id === activeChat);
    
    // If this is the first message and chat title is "New Chat", update the title
    if (currentChat?.messages.length === 0) {
      const newTitle = generateChatTitle(input);
      await updateChatTitle(activeChat, newTitle);
    }

    // Send the message via socket
    setIsLoading(true);
    sendChatMessage(input);
    setInput('');
    
    // Loading state will be cleared when we receive ai-response or ai-error
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit} className="chat-input-form">
        <div className="input-wrapper">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here... (Shift+Enter for new line)"
            className="chat-input"
            disabled={isLoading}
            rows={1}
          />
          <button
            type="submit"
            className={`send-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading || !input.trim()}
            title="Send message (or press Enter)"
          >
            {isLoading ? (
              <span className="loading-spinner">⏳</span>
            ) : (
              <span className="send-icon">➤</span>
            )}
          </button>
        </div>
      </form>
      <div className="chat-input-footer">
        <p className="footer-text">IkAIris may make mistakes. Always verify important information.</p>
      </div>
    </div>
  );
}