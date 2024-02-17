import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from './Context/index.js'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import LoginPage from './LoginPage.jsx'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>

)
