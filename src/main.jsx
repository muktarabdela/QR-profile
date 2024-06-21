import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Loglib from "@loglib/tracker/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Loglib
      config={{
        id: "pharmedia",
      }}
    />
  </>
)

