import { useEffect, useRef, useCallback } from 'react';
import io from 'socket.io-client';

export function useSocket() {
  const socketRef = useRef(null);
  const isConnectedRef = useRef(false);

  const connect = useCallback(() => {
    if (isConnectedRef.current) return;

    const token = localStorage.getItem('token');
    
    socketRef.current = io('http://localhost:3000', {
      withCredentials: true,
      auth: {
        token: token
      },
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5
    });

    socketRef.current.on('connect', () => {
      console.log('Socket connected:', socketRef.current.id);
      isConnectedRef.current = true;
    });

    socketRef.current.on('disconnect', () => {
      console.log('Socket disconnected');
      isConnectedRef.current = false;
    });

    socketRef.current.on('connect_error', (error) => {
      console.error('Socket connection error:', error.message);
    });
  }, []);

  const disconnect = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.disconnect();
      isConnectedRef.current = false;
    }
  }, []);

  const sendMessage = useCallback((event, data) => {
    if (socketRef.current && isConnectedRef.current) {
      socketRef.current.emit(event, data);
    } else {
      console.warn('Socket not connected');
    }
  }, []);

  const onMessage = useCallback((event, callback) => {
    if (socketRef.current) {
      socketRef.current.on(event, callback);
    }
  }, []);

  const offMessage = useCallback((event, callback) => {
    if (socketRef.current) {
      socketRef.current.off(event, callback);
    }
  }, []);

  return {
    socket: socketRef.current,
    connect,
    disconnect,
    sendMessage,
    onMessage,
    offMessage,
    isConnected: isConnectedRef.current
  };
}
