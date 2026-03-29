import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Wrapper from './Wrapper.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(<Wrapper h="Hello">
    <App />
    <ToastContainer position='top-center' />
</Wrapper>)

