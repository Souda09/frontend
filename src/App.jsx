import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm.jsx'
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

// Pages components (Inhe aap baad mein apne alag files se import kar sakte hain)
const Home = () => <div className="p-10 text-center text-2xl font-serif">🏡 Home Page (Welcome to Novella)</div>;
const About = () => <div className="p-10 text-center text-2xl font-serif">📖 About Us Page</div>;
const Contact = () => <div className="p-10 text-center text-2xl font-serif">📞 Contact Page</div>;

// Dashboards
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

import './App.css'

function App() {
  return (
    // Pure routing system ko global Auth Context ke andar wrap kar diya
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Authentication Routes */}
          <Route path="/" element={<SignupForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Protected Routes (Sirf unhe dikhenge jo authenticated hain, warna direct '/' par jump kar jayenge) */}
          <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </Route>

          {/* Strictly Admin Routes (Sirf admin role wala hi isko khol payega) */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App