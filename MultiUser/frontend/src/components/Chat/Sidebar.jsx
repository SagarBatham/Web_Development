import { useContext, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';
import './Sidebar.css';

export default function Sidebar() {
  const { chats, activeChat, createNewChat, deleteChat, setActiveChat, user } = useContext(ChatContext);
  const [hoveredChatId, setHoveredChatId] = useState(null);

  const handleNewChat = () => {
    createNewChat();
  };

  const userName = user?.fullname || 'User';
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="new-chat-btn" onClick={handleNewChat}>
          <span className="plus-icon">+</span>
          <span>New Chat</span>
        </button>
      </div>

      <div className="sidebar-content">
        <div className="chats-list">
          {chats.length === 0 ? (
            <div className="no-chats">
              <p>No chats yet</p>
              <p className="text-small">Start a new conversation</p>
            </div>
          ) : (
            chats.map(chat => (
              <div
                key={chat._id}
                className={`chat-item ${activeChat === chat._id ? 'active' : ''}`}
                onMouseEnter={() => setHoveredChatId(chat._id)}
                onMouseLeave={() => setHoveredChatId(null)}
                onClick={() => setActiveChat(chat._id)}
              >
                <div className="chat-item-content">
                  <span className="chat-icon">💬</span>
                  <span className="chat-title">{chat.title}</span>
                </div>
                {hoveredChatId === chat._id && (
                  <button
                    className="delete-chat-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteChat(chat._id);
                    }}
                  >
                    🗑️
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-divider"></div>
        <div className="user-info">
          <span className="user-avatar">{userInitial}</span>
          <span className="user-name">{userName}</span>
        </div>
      </div>
    </div>
  );
}
