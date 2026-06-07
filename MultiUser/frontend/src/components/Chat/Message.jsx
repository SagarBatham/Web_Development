import './Message.css';

export default function Message({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`message ${isUser ? 'user-message' : 'ai-message'}`}>
      <div className="message-content">
        <div className={`message-bubble ${isUser ? 'user-bubble' : 'ai-bubble'}`}>
          {message.content}
        </div>
        <span className="message-time">
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  );
}
