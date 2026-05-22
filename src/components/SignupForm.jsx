import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../config/service'; // Aapka axios instance

const SignupForm = () => {
  const navigate = useNavigate();
  
  // Form Inputs State
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Status UI States
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // 1. Password Match Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setIsSubmitting(true);

    try {
      // 2. Route Fix: Backend ke mutabiq '/user' hit kiya hai
      const response = await API.post('/user', {
        name: username,
        email: email,
        password: password
      });

      if (response.data.status === true) {
        alert("Account created successfully!");
        
        // Agar signup par hi token mil raha hai toh save kar sakte hain
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }

        // Kamyabi ke baad login page par bhej dein
        navigate('/login');
      } else {
        setError(response.data.message || 'Signup failed');
      }

    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Signup failed! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create Account
        </h2>
        
        {/* Error Alert Box (Login Form Jaisa) */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-md mb-4 text-center">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
              placeholder="johndoe"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
              placeholder="email@example.com"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button (Login Form ki tarah Emerald Green) */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white py-2 px-4 rounded-md transition duration-200 font-semibold ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-800 hover:bg-emerald-900'
            }`}
          >
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        {/* Bottom Redirect Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? 
          <Link to="/login" className="text-blue-600 font-medium hover:underline ml-1">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;