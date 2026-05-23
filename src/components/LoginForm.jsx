// import React, { useState } from 'react';
// import api from '../config/service.js'; 
// import { useNavigate, Link } from 'react-router-dom'; // 1. Link ko yahan import kiya

// const LoginForm = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setLoginData({
//       ...loginData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       // 2. Sahi endpoint: Aapke backend route mein sirf '/login' define hai
//       const response = await api.post('/login', loginData); 
      
//       console.log("Login Success:", response.data);
//       alert("Login Successful!");

//       // Token save karna
//       localStorage.setItem('token', response.data.token);

//       // Successfully login hone ke baad user ko dashboard ya getuser par bhejein
//       // navigate('/getuser'); 
      
//     } catch (error) {
//       console.log("Login Error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Invalid Credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Welcome Back
//         </h2>
        
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={loginData.email}
//               onChange={handleChange}
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="admin@example.com"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <div className="flex justify-between items-center">
//               <label className="block text-sm font-medium text-gray-700">Password</label>
//               <a href="#" className="text-xs text-blue-600 hover:underline">Forgot?</a>
//             </div>
//             <input
//               type="password"
//               name="password"
//               value={loginData.password}
//               onChange={handleChange}
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="••••••••"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full text-white py-2 px-4 rounded-md transition duration-200 font-semibold ${
//               loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         {/* 3. Anchor tag ko Link component se replace kar diya */}
//         <p className="mt-6 text-center text-sm text-gray-600">
//           Don't have an account? 
//           <Link to="/SignupForm" className="text-blue-600 font-medium hover:underline ml-1">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;















import React, { useState } from 'react';
import api from '../config/service.js';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); 

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true); 

        try {
            const response = await api.post('/login', { email, password });
            
            // Console mein check karne ke liye data print kiya:
            console.log("Backend Response Data:", response.data);

            if (response.data.status === true) {
                const userData = response.data.user;
                const token = response.data.token;

                // 1. Token aur User Object dono ko Local Storage mein daalna:
                if (token) localStorage.setItem('token', token);
                if (userData) localStorage.setItem('user', JSON.stringify(userData));

                // Console mein check karein ke local storage set hua ya nahi:
                console.log("LocalStorage Saved User:", JSON.parse(localStorage.getItem('user')));

                // 2. Auth Context update karna
                login(userData);

                // 3. Role check karke redirect karna
                if (userData && userData.role === 'admin') {
                    console.log("Redirecting to Admin Dashboard... ✈️");
                    navigate('/admin-dashboard');
                } else {
                    console.log("Redirecting to User Dashboard... ✈️");
                    navigate('/dashboard'); 
                }
            } else {
                setError(response.data.message || 'Login failed');
            }

        } catch (err) {
            console.error("Critical Network Error:", err);
            setError(err.response?.data?.message || 'Network error! Please check your internet connection.');
        } finally {
            setIsSubmitting(false); 
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Welcome Back</h2>
                
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-md mb-4 text-center">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                            placeholder="admin@example.com"
                            required
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <a href="#" className="text-xs text-blue-600 hover:underline">Forgot?</a>
                        </div>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting} 
                        className={`w-full text-white py-2 px-4 rounded-md transition duration-200 font-semibold ${
                            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-800 hover:bg-emerald-900'
                        }`}
                    >
                        {isSubmitting ? 'Verifying Credentials...' : 'Sign In'}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account? 
                    <Link to="/signup" className="text-blue-600 font-medium hover:underline ml-1">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;