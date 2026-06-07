import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
});

// Add token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // Also try to set it as a header for APIs that expect it
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const chatAPI = {
  // Create a new chat
  createChat: (title) => {
    return api.post('/chat', { title });
  },

  // Get all chats for current user
  getChats: () => {
    return api.get('/chat');
  },

  // Get messages for a specific chat
  getChatMessages: (chatId) => {
    return api.get(`/chat/${chatId}/messages`);
  },

  // Delete a chat
  deleteChat: (chatId) => {
    return api.delete(`/chat/${chatId}`);
  },

  // Update chat title
  updateChatTitle: (chatId, title) => {
    return api.put(`/chat/${chatId}`, { title });
  }
};

export default api;

