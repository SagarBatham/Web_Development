import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatContext } from '../../context/ChatContext';
import Sidebar from '../../components/Chat/Sidebar';
import ChatWindow from '../../components/Chat/ChatWindow';
import ChatHeader from '../../components/Chat/ChatHeader';
import './Chat.css';

export default function Chat() {
  const { chats, activeChat, createNewChat, loading, error } = useContext(ChatContext);
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (!token || !user) {
      navigate('/login');
      return;
    }
    
    setIsChecking(false);
  }, [navigate]);

  // Create first chat if no active chat and chats are loaded
  useEffect(() => {
    if (!loading && chats.length === 0 && !activeChat && !isChecking) {
      createNewChat('Welcome Chat');
    }
  }, [loading, chats.length, activeChat, createNewChat, isChecking]);

  if (isChecking) {
    return (
      <div className="chat-page">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-page">
      <ChatHeader />
      {error && (
        <div className="error-banner">
          <p>{error}</p>
        </div>
      )}
      {loading && chats.length === 0 ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading your chats...</p>
        </div>
      ) : (
        <div className="chat-layout">
          <Sidebar />
          <ChatWindow />
        </div>
      )}
    </div>
  );
}
