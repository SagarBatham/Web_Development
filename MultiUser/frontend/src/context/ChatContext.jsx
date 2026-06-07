import { createContext, useState, useCallback, useEffect } from 'react';
import { useSocket } from './useSocket';
import { chatAPI } from '../services/api';

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { connect, disconnect, sendMessage, onMessage, offMessage } = useSocket();

  // Load user data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Initialize socket and load chats on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      connect();
      loadChats();
    }

    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  // Handle incoming AI responses
  useEffect(() => {
    const handleAiResponse = ({ chat, content }) => {
      console.log('Received AI response:', content);
      setChats(prev =>
        prev.map(c =>
          c._id === chat
            ? {
              ...c,
              messages: [
                ...c.messages,
                {
                  _id: Date.now(),
                  content: content,
                  role: 'model',
                  createdAt: new Date().toISOString(),
                }
              ]
            }
            : c
        )
      );
    };

    const handleAiError = ({ message }) => {
      console.error('AI error:', message);
      setError(message);
    };

    onMessage('ai-response', handleAiResponse);
    onMessage('ai-error', handleAiError);

    return () => {
      offMessage('ai-response', handleAiResponse);
      offMessage('ai-error', handleAiError);
    };
  }, [onMessage, offMessage]);

  const loadChats = async () => {
    try {
      setLoading(true);
      const response = await chatAPI.getChats();
      console.log('Loaded chats:', response.data);
      setChats(response.data.chats || []);
      
      // Set the most recent chat as active
      if (response.data.chats && response.data.chats.length > 0) {
        setActiveChat(response.data.chats[0]._id);
      }
    } catch (err) {
      console.error('Error loading chats:', err);
      setError(err.response?.data?.msg || 'Failed to load chats');
    } finally {
      setLoading(false);
    }
  };

  const createNewChat = useCallback(async (title = 'New Chat') => {
    try {
      setLoading(true);
      const response = await chatAPI.createChat(title);
      const newChat = {
        ...response.data.chat,
        messages: []
      };
      setChats(prev => [newChat, ...prev]);
      setActiveChat(newChat._id);
      return newChat._id;
    } catch (err) {
      console.error('Error creating chat:', err);
      setError(err.response?.data?.msg || 'Failed to create chat');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const sendChatMessage = useCallback((message) => {
    if (!activeChat) return;

    // Add user message to local state immediately
    setChats(prev =>
      prev.map(chat =>
        chat._id === activeChat
          ? {
            ...chat,
            messages: [
              ...chat.messages,
              {
                _id: Date.now(),
                content: message,
                role: 'user',
                createdAt: new Date().toISOString(),
              }
            ]
          }
          : chat
      )
    );

    // Send message via socket.io
    sendMessage('ai-message', { chat: activeChat, content: message });
  }, [activeChat, sendMessage]);

  const deleteChat = useCallback(async (chatId) => {
    try {
      await chatAPI.deleteChat(chatId);
      setChats(prev => prev.filter(chat => chat._id !== chatId));
      if (activeChat === chatId) {
        setActiveChat(chats.length > 1 ? chats[0]._id : null);
      }
    } catch (err) {
      console.error('Error deleting chat:', err);
      setError(err.response?.data?.msg || 'Failed to delete chat');
    }
  }, [activeChat, chats]);

  const updateChatTitle = useCallback(async (chatId, newTitle) => {
    try {
      await chatAPI.updateChatTitle(chatId, newTitle);
      setChats(prev =>
        prev.map(chat =>
          chat._id === chatId ? { ...chat, title: newTitle } : chat
        )
      );
    } catch (err) {
      console.error('Error updating chat title:', err);
      setError(err.response?.data?.msg || 'Failed to update chat title');
    }
  }, []);

  const getCurrentChat = useCallback(() => {
    return chats.find(chat => chat._id === activeChat);
  }, [chats, activeChat]);

  const setUserData = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('chats');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setChats([]);
    setActiveChat(null);
    setUser(null);
    disconnect();
  }, [disconnect]);

  const value = {
    chats,
    activeChat,
    user,
    loading,
    error,
    createNewChat,
    sendChatMessage,
    deleteChat,
    updateChatTitle,
    getCurrentChat,
    setUserData,
    setActiveChat,
    logout,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}
