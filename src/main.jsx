/* This project was created by Connor Page for the Phase 2 final project 
at Flatiron. For more information, see the README. */
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
<>
  <Toaster />
  <RouterProvider router={router} />
</>   
  
  
  // </React.StrictMode>,
)
