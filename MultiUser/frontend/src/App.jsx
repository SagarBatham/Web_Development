import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Context
import { ChatProvider } from './context/ChatContext';

function AppContent() {
  const location = useLocation();
  const isChatPage = location.pathname === '/chat';

  return (
    <>
      {!isChatPage && <Navbar />}
      <main className={isChatPage ? 'app-main-chat' : 'app-main'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
      {!isChatPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <ChatProvider>
      <Router>
        <AppContent />
      </Router>
    </ChatProvider>
  );
}

export default App;
