import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'

import { GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'

axios.defaults.withCredentials = true;

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || "placeholder-client-id";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
