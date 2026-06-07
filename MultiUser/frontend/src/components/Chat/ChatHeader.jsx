import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatContext } from '../../context/ChatContext';
import ProfileModal from './ProfileModal';
import './ChatHeader.css';

export default function ChatHeader() {
  const { user, logout } = useContext(ChatContext);
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
      navigate('/');
    }
  };

  return (
    <>
      <header className="chat-header">
        <div className="header-left">
          <h1 className="app-title">IkAIris</h1>
          <span className="app-subtitle">AI Chat Assistant</span>
        </div>

        <div className="header-right">
          <div className="user-button-container">
            <button 
              className="user-avatar-btn"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              title="User Profile"
            >
              <span className="avatar-circle">{user?.fullname?.charAt(0).toUpperCase() || 'U'}</span>
              <span className="user-display-name">{user?.fullname || 'User'}</span>
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
            </button>

            {isDropdownOpen && (
              <div className="user-dropdown-menu">
                <button 
                  className="dropdown-item profile-item"
                  onClick={() => {
                    setIsProfileOpen(true);
                    setIsDropdownOpen(false);
                  }}
                >
                  👤 View Profile
                </button>
                <div className="dropdown-divider"></div>
                <button 
                  className="dropdown-item logout-item"
                  onClick={handleLogout}
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
}
