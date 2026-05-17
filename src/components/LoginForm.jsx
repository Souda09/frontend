import React, { useState } from 'react';
 import api from '../config/service.js'; 
import { useNavigate } from 'react-router-dom'; // Agar aap redirection chahte hain

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // API call using your axios service
      const response = await api.post('/auth/login', loginData);
      
      console.log("Login Success:", response.data);
      alert("Login Successful!");

      // Token save karna (agar aap JWT use kar rahe hain)
      localStorage.setItem('token', response.data.token);

      // Dashboard ya Home page par bhejne ke liye
      // navigate('/dashboard'); 
      
    } catch (error) {
      console.log("Login Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Welcome Back
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="admin@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-xs text-blue-600 hover:underline">Forgot?</a>
            </div>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-2 px-4 rounded-md transition duration-200 font-semibold ${
              loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-blue-600 font-medium hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;