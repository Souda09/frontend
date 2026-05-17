import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm.jsx'
// import api from '../config/service.js'
import './App.css'


function App() {
  return (
    <>
      
      <Router>
      <Routes>
        {/* Default page Signup hogi */}
        <Route path="/" element={<SignupForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App