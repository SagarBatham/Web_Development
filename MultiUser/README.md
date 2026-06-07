# IkAIris - Multi-User AI Chat Application

> A full-stack, real-time AI chatbot application with user authentication, multiple chat management, and vector-based memory system.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v19-blue)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/cloud/atlas)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
- [Architecture](#architecture)
- [Development Journey](#development-journey)
- [How It Works](#how-it-works)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**IkAIris** is a modern, full-stack web application that combines user authentication, real-time chat functionality, and artificial intelligence. Users can create accounts, login, and interact with an AI chatbot powered by Google Gemini. The application maintains separate chat sessions, automatically generates chat titles, and uses vector embeddings for context-aware responses.

### Key Highlights
- 🔐 **Secure Authentication**: JWT-based user authentication with HTTP-only cookies
- 💬 **Real-time Chat**: WebSocket-based communication via Socket.io
- 🤖 **AI-Powered**: Google Gemini 3.5 Flash for intelligent responses
- 📚 **Memory System**: Pinecone vector database for context awareness
- 🎨 **Modern UI**: ChatGPT-like dark theme with responsive design
- 📱 **Full-Stack**: Built with Node.js, Express, React, and MongoDB

---

## ✨ Features

### Authentication & User Management
- ✅ User registration with email and password
- ✅ Secure login with JWT tokens
- ✅ Password hashing using bcrypt
- ✅ User profile management
- ✅ Logout functionality
- ✅ Token-based session persistence

### Chat Management
- ✅ Create multiple chat sessions
- ✅ Automatic chat title generation from first message
- ✅ Chat history persistence
- ✅ Delete chats (with message cleanup)
- ✅ Update chat titles
- ✅ Chat sorting by last activity
- ✅ View all user's chats with message history

### AI Chat Features
- ✅ Real-time message handling via Socket.io
- ✅ Google Gemini 3.5 Flash AI responses
- ✅ Vector embeddings for semantic search
- ✅ Memory-based context retrieval (top 3 similar messages)
- ✅ Chat history integration
- ✅ Error handling and user feedback

### User Interface
- ✅ ChatGPT-like dark theme (#0d0d0d)
- ✅ Real-time message updates
- ✅ Smooth animations and transitions
- ✅ User avatar with initials
- ✅ Dropdown menu for profile & logout
- ✅ Loading states and spinners
- ✅ Error banners for failed operations
- ✅ Responsive design (mobile, tablet, desktop)

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.6 | UI framework |
| React Router DOM | 7.15.1 | Client-side routing |
| Socket.io Client | 4.8.3 | Real-time communication |
| Axios | 1.16.1 | HTTP client |
| Vite | 8.0.12 | Build tool & dev server |
| CSS3 | Native | Styling |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 18+ | Runtime |
| Express | 5.2.1 | Web framework |
| Socket.io | 4.8.3 | WebSocket library |
| MongoDB | 9.6.2 | Database (via Mongoose) |
| Mongoose | 9.6.2 | ODM |
| JWT | 9.0.3 | Authentication |
| Bcrypt | 6.0.0 | Password hashing |
| CORS | 2.8.6 | Cross-origin requests |
| Cookie-Parser | 1.4.7 | Cookie handling |

### External Services
| Service | Purpose |
|---------|---------|
| Google Gemini API | AI responses & embeddings |
| Pinecone | Vector database for memory |
| MongoDB Atlas | Cloud database |

---

## 📁 Project Structure

```
MultiUser/
├── backend/
│   ├── src/
│   │   ├── app.js                 # Express app configuration
│   │   ├── controllers/
│   │   │   ├── user.controller.js # Auth logic
│   │   │   └── chat.controller.js # Chat operations
│   │   ├── middleware/
│   │   │   └── auth.middleware.js # JWT verification
│   │   ├── model/
│   │   │   ├── user.model.js      # User schema
│   │   │   ├── chat.model.js      # Chat schema
│   │   │   └── message.model.js   # Message schema
│   │   ├── routes/
│   │   │   ├── user.routes.js     # Auth endpoints
│   │   │   └── chat.routes.js     # Chat endpoints
│   │   ├── service/
│   │   │   ├── ai.service.js      # Gemini API integration
│   │   │   └── vector.service.js  # Pinecone integration
│   │   ├── sockets/
│   │   │   └── socket.server.js   # WebSocket handlers
│   │   └── db/
│   │       └── db.js              # MongoDB connection
│   ├── server.js                  # Entry point
│   ├── package.json
│   └── .env                       # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx                # Main app component
│   │   ├── main.jsx               # React entry point
│   │   ├── pages/
│   │   │   ├── Home/              # Landing page
│   │   │   ├── Register/          # Registration page
│   │   │   ├── Login/             # Login page
│   │   │   └── Chat/              # Chat page
│   │   ├── components/
│   │   │   ├── Navbar/            # Top navigation
│   │   │   ├── Footer/            # Footer
│   │   │   └── Chat/
│   │   │       ├── Sidebar.jsx    # Chat list
│   │   │       ├── ChatHeader.jsx # User controls
│   │   │       ├── ChatWindow.jsx # Message display
│   │   │       ├── ChatInput.jsx  # Message input
│   │   │       ├── Message.jsx    # Message bubble
│   │   │       └── ProfileModal.jsx # User profile
│   │   ├── context/
│   │   │   ├── ChatContext.jsx    # Global state
│   │   │   └── useSocket.js       # Socket hook
│   │   ├── services/
│   │   │   └── api.js             # API calls
│   │   └── index.css              # Global styles
│   ├── vite.config.js
│   ├── package.json
│   └── index.html
│
├── INTEGRATION_GUIDE.md            # Integration details
├── README.md                       # This file
└── .env                           # Environment variables
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js v18+ installed
- MongoDB Atlas account (or local MongoDB)
- Google Gemini API key
- Pinecone API key
- npm or yarn

### Step 1: Clone & Navigate
```bash
cd MultiUser
```

### Step 2: Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file in backend directory
cat > .env << EOF
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_secret_key_here
GEMINI_API_KEY=your_gemini_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX=your_pinecone_index_name
EOF

# Verify dependencies
npm list
```

### Step 3: Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Verify installation
npm list
```

### Step 4: Environment Configuration

**Backend .env** (`backend/.env`):
```env
# MongoDB
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/ikairiris

# JWT
JWT_SECRET=your_super_secret_key_min_32_chars

# Google Gemini
GEMINI_API_KEY=AIzaSyDxxxxxxxxxxxxxx

# Pinecone
PINECONE_API_KEY=your_pinecone_key
PINECONE_INDEX=your_index_name

# Server
PORT=3000
NODE_ENV=development
```

**Frontend** (uses `http://localhost:3000` by default in code)

---

## 🎮 Running the Project

### Development Mode

**Terminal 1 - Backend:**
```bash
cd MultiUser/backend
npm start
# Server runs on http://localhost:3000
```

**Terminal 2 - Frontend:**
```bash
cd MultiUser/frontend
npm run dev
# Frontend runs on http://localhost:5173
```

### Production Build

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

### Testing

```bash
# Frontend linting
cd frontend
npm run lint

# Backend testing (if configured)
cd backend
npm test
```

---

## 📡 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "fullname": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}

Response: 201 Created
{
  "msg": "User registered successfully",
  "user": {
    "_id": "...",
    "fullname": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response: 200 OK
{
  "msg": "Login successful",
  "token": "eyJhbGc...",
  "user": { ... }
}
```

### Chat Endpoints

#### Create Chat
```http
POST /chat
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "My First Chat"
}

Response: 201 Created
{
  "msg": "Chat Created Successfully",
  "chat": {
    "_id": "...",
    "title": "My First Chat",
    "user": "...",
    "messages": []
  }
}
```

#### Get All Chats
```http
GET /chat
Authorization: Bearer {token}

Response: 200 OK
{
  "msg": "Chats Retrieved Successfully",
  "chats": [
    {
      "_id": "...",
      "title": "Chat Title",
      "messages": [
        {
          "_id": "...",
          "content": "Hello",
          "role": "user",
          "createdAt": "2024-01-01T00:00:00Z"
        }
      ]
    }
  ]
}
```

#### Get Chat Messages
```http
GET /chat/{chatId}/messages
Authorization: Bearer {token}

Response: 200 OK
{
  "msg": "Messages Retrieved Successfully",
  "messages": [ ... ]
}
```

#### Update Chat Title
```http
PUT /chat/{chatId}
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "New Title"
}
```

#### Delete Chat
```http
DELETE /chat/{chatId}
Authorization: Bearer {token}

Response: 200 OK
{
  "msg": "Chat Deleted Successfully"
}
```

### WebSocket Events

#### Client → Server
```javascript
// Send message
socket.emit('ai-message', {
  chat: 'chatId',
  content: 'User message'
});
```

#### Server → Client
```javascript
// AI response received
socket.on('ai-response', (data) => {
  // data = { chat: 'chatId', content: 'AI response' }
});

// Error occurred
socket.on('ai-error', (data) => {
  // data = { message: 'error message' }
});
```

---

## 🏗 Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client (React)                           │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Pages: Home, Register, Login, Chat                        │ │
│  │  Components: Navbar, Sidebar, ChatWindow, ChatInput        │ │
│  │  Context: ChatContext (Global State)                       │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
              HTTP Requests      WebSocket (Socket.io)
              (REST API)         (Real-time)
                    │                   │
┌───────────────────────────────────────────────────────────────────┐
│                     Server (Express)                              │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │  Routes: /auth (register, login), /chat (CRUD)            │ │
│  │  Controllers: userController, chatController              │ │
│  │  Middleware: authMiddleware (JWT verification)            │ │
│  │  WebSocket: Socket.io handlers for real-time chat         │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                    │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │  Services: AI Service (Gemini), Vector Service (Pinecone) │ │
│  │  - Generates vector embeddings                            │ │
│  │  - Queries similar memories                              │ │
│  │  - Calls Gemini API for responses                        │ │
│  └─────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────┘
                              │
                  ┌───────────┼───────────┐
                  │           │           │
            ┌─────▼────┐ ┌────▼─────┐ ┌─▼──────────┐
            │ MongoDB  │ │ Gemini   │ │ Pinecone   │
            │ (Data)   │ │ (AI)     │ │ (Vectors)  │
            └──────────┘ └──────────┘ └────────────┘
```

### Data Flow

#### User Registration
1. Frontend submits form to `/auth/register`
2. Backend hashes password with bcrypt
3. User saved to MongoDB
4. JWT token generated and sent back
5. Token stored in localStorage

#### Chat Message Flow
1. User types in ChatInput component
2. Message sent via `socket.emit('ai-message', {...})`
3. Backend receives via Socket.io connection
4. Creates user message in MongoDB
5. Generates vector embedding via Gemini
6. Queries Pinecone for similar memories (top 3)
7. Builds history + memories + new message
8. Sends to Gemini API
9. Creates AI message in MongoDB
10. Emits response back via `socket.emit('ai-response', {...})`
11. Frontend updates ChatContext
12. Message appears in ChatWindow

---

## 📚 Development Journey

### Phase 1: Project Setup
- ✅ Initialized Node.js backend with Express
- ✅ Created React frontend with Vite
- ✅ Set up MongoDB connection with Mongoose
- ✅ Configured CORS and middleware

### Phase 2: Authentication
- ✅ Built user registration endpoint
- ✅ Implemented JWT-based login
- ✅ Created auth middleware for protected routes
- ✅ Built registration & login UI pages
- ✅ Implemented token persistence in localStorage

### Phase 3: Chat Foundation
- ✅ Designed MongoDB schemas (User, Chat, Message)
- ✅ Created chat CRUD endpoints
- ✅ Built React components (Sidebar, ChatWindow, ChatInput)
- ✅ Set up Context API for state management
- ✅ Created basic chat UI with ChatGPT-like theme

### Phase 4: Real-time Features
- ✅ Integrated Socket.io for WebSocket communication
- ✅ Implemented real-time message handling
- ✅ Created socket authentication via JWT cookies
- ✅ Built message emission and receiving logic

### Phase 5: AI Integration
- ✅ Integrated Google Gemini API
- ✅ Implemented vector embedding generation
- ✅ Set up Pinecone vector database
- ✅ Created memory query functionality
- ✅ Built context-aware AI responses

### Phase 6: Polish & Refinement
- ✅ Added auto-title generation from first message
- ✅ Implemented error handling
- ✅ Added loading states and spinners
- ✅ Enhanced UI with animations
- ✅ Added user profile modal
- ✅ Implemented chat deletion with cleanup
- ✅ Added responsive design

### Phase 7: Integration & Testing
- ✅ Connected frontend and backend fully
- ✅ Fixed authentication flow
- ✅ Tested real-time messaging
- ✅ Verified AI responses
- ✅ Deployed locally and tested end-to-end

---

## 🔄 How It Works

### Message Processing Pipeline

```
User Input
    ↓
ChatInput.jsx handles submission
    ↓
Message added to ChatContext (optimistic update)
    ↓
socket.emit('ai-message', { chat, content })
    ↓
Backend Socket Handler receives event
    ↓
┌─────────────────────────────┐
│ Process Message             │
│ 1. Save user message to DB  │
│ 2. Generate embedding       │
│ 3. Store in Pinecone        │
│ 4. Query similar memories   │
│ 5. Build chat history       │
│ 6. Call Gemini API          │
│ 7. Save AI response to DB   │
│ 8. Generate response vector │
│ 9. Store in Pinecone        │
└─────────────────────────────┘
    ↓
socket.emit('ai-response', { chat, content })
    ↓
Frontend receives event
    ↓
ChatContext updated with AI message
    ↓
Message appears in ChatWindow
    ↓
Display in UI
```

### Authentication Flow

```
User visits /login
    ↓
Enters email & password
    ↓
POST /auth/login
    ↓
Backend verifies credentials
    ↓
Generates JWT token
    ↓
Sets HTTP-only cookie
    ↓
Sends token + user data to frontend
    ↓
Frontend stores in localStorage
    ↓
Redirects to /chat
    ↓
Socket.io connects with credentials
    ↓
Middleware verifies token from cookie
    ↓
User authenticated
```

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### ❌ Socket Connection Error
```
Error: "Cannot GET /socket.io"
```
**Solution:**
- Ensure backend is running on port 3000
- Check CORS configuration in socket.server.js
- Verify frontend URL matches CORS origin

#### ❌ MongoDB Connection Failed
```
Error: "connect ECONNREFUSED 127.0.0.1:27017"
```
**Solution:**
- Check MongoDB Atlas connection string
- Verify IP whitelist includes your IP
- Test connection string in MongoDB Compass

#### ❌ Gemini API Error
```
Error: "Invalid API Key"
```
**Solution:**
- Generate new API key from Google Cloud Console
- Update .env file
- Restart backend server

#### ❌ Messages Not Saving
```
Messages appear but don't persist
```
**Solution:**
- Check MongoDB connection
- Verify user authentication
- Check server logs for errors
- Clear browser localStorage

#### ❌ AI Not Responding
```
Spinner keeps loading indefinitely
```
**Solution:**
- Check GEMINI_API_KEY in .env
- Verify Pinecone connectivity
- Check backend logs for errors
- Ensure chat history is loading correctly

#### ❌ CORS Error
```
Error: "Access to XMLHttpRequest blocked by CORS"
```
**Solution:**
- Verify frontend URL in backend CORS config
- Update origin in app.js if needed
- Clear browser cache
- Restart servers

---

## 🚀 Future Enhancements

### Short Term (v1.1)
- [ ] Streaming AI responses (word-by-word)
- [ ] Voice message support
- [ ] Message editing and deletion
- [ ] Chat search functionality
- [ ] Dark/Light theme toggle

### Medium Term (v1.2)
- [ ] User-to-user chat (not just AI)
- [ ] Chat sharing with other users
- [ ] Export chats as PDF/JSON
- [ ] Image upload and analysis
- [ ] Chat folders/organization

### Long Term (v2.0)
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Custom AI model fine-tuning
- [ ] Multi-language support
- [ ] Payment system integration
- [ ] Chat collaboration features
- [ ] RAG (Retrieval-Augmented Generation)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards
- Use clear, descriptive variable names
- Add comments for complex logic
- Follow existing code style
- Test before submitting PR

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📧 Support & Contact

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact: your-email@example.com
- Documentation: See INTEGRATION_GUIDE.md

---

## 🎉 Acknowledgments

- **Google Gemini** for AI capabilities
- **Pinecone** for vector storage
- **MongoDB** for data persistence
- **Socket.io** for real-time communication
- **React** and **Express** communities

---

## 📊 Project Stats

- **Frontend Files**: 25+
- **Backend Files**: 15+
- **API Endpoints**: 8
- **WebSocket Events**: 3
- **Database Collections**: 3
- **External APIs**: 3
- **Lines of Code**: 3000+

---

## 🗺 Roadmap

### Current Version: v1.0 ✅
- Basic chat functionality
- User authentication
- AI responses via Gemini
- Vector-based memory
- Real-time messaging

### Next: v1.1 (Q2 2024)
- Streaming responses
- Voice support
- Message management

### Future: v2.0 (Q4 2024)
- Mobile app
- Collaboration features
- Advanced analytics

---

**Built with ❤️ using React, Node.js, and AI**

For the latest updates, visit the [project repository](https://github.com/your-username/ikairis).

---

## 📖 Quick Reference

| Task | Command |
|------|---------|
| Start Backend | `cd backend && npm start` |
| Start Frontend | `cd frontend && npm run dev` |
| Build Frontend | `cd frontend && npm run build` |
| Lint Code | `cd frontend && npm run lint` |
| Install Dependencies | `npm install` |
| View API Docs | See [API Documentation](#-api-documentation) |

---

**Last Updated**: May 31, 2024  
**Version**: 1.0.0  
**Status**: Production Ready ✅
