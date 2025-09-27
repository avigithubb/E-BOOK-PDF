import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "/src/components/AuthContext.jsx";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/E-BOOK-PDF'>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
