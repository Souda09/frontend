// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignupForm from './components/SignupForm'
// import LoginForm from './components/LoginForm.jsx'
// import { AuthProvider } from './context/AuthContext';
// import { ProtectedRoute } from './components/ProtectedRoute';

// // Pages components (Inhe aap baad mein apne alag files se import kar sakte hain)
// const Home = () => <div className="p-10 text-center text-2xl font-serif">🏡 Home Page (Welcome to Novella)</div>;
// const About = () => <div className="p-10 text-center text-2xl font-serif">📖 About Us Page</div>;
// const Contact = () => <div className="p-10 text-center text-2xl font-serif">📞 Contact Page</div>;

// // Dashboards
// import UserDashboard from './pages/UserDashboard';
// import AdminDashboard from './pages/AdminDashboard';

// import './App.css'

// function App() {
//   return (
//     // Pure routing system ko global Auth Context ke andar wrap kar diya
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public Authentication Routes */}
//           <Route path="/" element={<SignupForm />} />
//           <Route path="/signup" element={<SignupForm />} />
//           <Route path="/login" element={<LoginForm />} />

//           {/* Protected Routes (Sirf unhe dikhenge jo authenticated hain, warna direct '/' par jump kar jayenge) */}
//           <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/dashboard" element={<UserDashboard />} />
//           </Route>

//           {/* Strictly Admin Routes (Sirf admin role wala hi isko khol payega) */}
//           <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
//             <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           </Route>
//         </Routes>
//       </Router>
//     </AuthProvider>
//   )
// }

// export default App

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm.jsx'
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { BookOpen, ArrowRight, Bookmark, Compass, Feather, Star, Quote, Heart, Mail, MessageSquare, Send, ShieldCheck } from 'lucide-react';

// ==========================================
// DETAILED PAGES WITH NAVBAR LINKS (No system changes)
// ==========================================

// --- 1. HOME PAGE COMPONENT WITH DYNAMIC LINKS ---
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col font-serif" style={{ backgroundColor: '#FFFDF9', color: '#1A1A1A' }}>
      <header className="flex justify-between items-center px-8 py-5 border-b sticky top-0 bg-[#FFFDF9]/80 backdrop-blur-md z-50" style={{ borderColor: '#EAE6DF' }}>
        <Link to="/home" className="flex items-center gap-2 cursor-pointer">
          <BookOpen size={24} style={{ color: '#2C3E35' }} />
          <span className="text-xl font-bold tracking-wider" style={{ color: '#2C3E35' }}>NOVELLA</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-gray-600">
          <Link to="/home" className="hover:text-emerald-800 transition-colors font-medium">Home</Link>
          <Link to="/about" className="hover:text-emerald-800 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-emerald-800 transition-colors">Contact</Link>
          <Link to="/dashboard" className="hover:text-emerald-800 transition-colors">User Dashboard</Link>
        </nav>
        <div className="flex items-center gap-4 font-sans text-sm">
          <Link to="/dashboard" className="px-5 py-2 font-medium text-white rounded-full transition-all" style={{ backgroundColor: '#2C3E35' }}>My Library</Link>
        </div>
      </header>

      <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-16 flex flex-col items-center">
        <div className="text-center max-w-3xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans tracking-wide text-gray-500 mb-6 bg-white shadow-xs" style={{ borderColor: '#EAE6DF' }}>
            <Feather size={12} className="text-emerald-700" /> A Premium Digital Sanctuary For Readers
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]" style={{ color: '#2C3E35' }}>
            Your personal universe, bound in lines of prose.
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-500 font-sans max-w-xl leading-relaxed">
            Track your daily reading velocity, organize virtual bookshelves, and cultivate deep literary connections in a minimalist space.
          </p>
          <div className="mt-10 flex font-sans">
            <Link to="/dashboard" className="group flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium shadow-md transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#2C3E35' }}>
              Enter Your Library <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-24 border-t pt-16" style={{ borderColor: '#EAE6DF' }}>
          <div className="p-6 bg-white rounded-2xl border" style={{ borderColor: '#EAE6DF' }}>
            <div className="p-3 rounded-xl w-fit mb-4" style={{ backgroundColor: '#F0F7F4' }}><Bookmark size={20} style={{ color: '#2C3E35' }} /></div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#2C3E35' }}>Curated Shelves</h3>
            <p className="text-sm font-sans text-gray-400 leading-relaxed">Sort your classic collections, dynamic reading challenges, or private text archives systematically.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border" style={{ borderColor: '#EAE6DF' }}>
            <div className="p-3 rounded-xl w-fit mb-4" style={{ backgroundColor: '#FEF9E7' }}><Compass size={20} style={{ color: '#B37D14' }} /></div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#2C3E35' }}>Insightful Progress</h3>
            <p className="text-sm font-sans text-gray-400 leading-relaxed">Visualize exactly how many chapters and reading minutes you cross every week with crisp analytics.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border" style={{ borderColor: '#EAE6DF' }}>
            <div className="p-3 rounded-xl w-fit mb-4" style={{ backgroundColor: '#EBF5FB' }}><Star size={20} className="text-blue-700" /></div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#2C3E35' }}>Minimal Interface</h3>
            <p className="text-sm font-sans text-gray-400 leading-relaxed">No ads, no flashy animations, and no toxic social feeds—just your focus space and books.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- 2. ABOUT PAGE COMPONENT WITH NAVBAR LINKS ---
const About = () => {
  return (
    <div className="min-h-screen flex flex-col font-serif" style={{ backgroundColor: '#FFFDF9', color: '#1A1A1A' }}>
      <header className="flex justify-between items-center px-8 py-5 border-b bg-[#FFFDF9]" style={{ borderColor: '#EAE6DF' }}>
        <Link to="/home" className="flex items-center gap-2 cursor-pointer">
          <BookOpen size={24} style={{ color: '#2C3E35' }} />
          <span className="text-xl font-bold tracking-wider" style={{ color: '#2C3E35' }}>NOVELLA</span>
        </Link>
        <nav className="flex items-center gap-8 font-sans text-sm text-gray-600">
          <Link to="/home" className="hover:text-emerald-800">Home</Link>
          <Link to="/about" className="hover:text-emerald-800 font-medium text-emerald-800">About</Link>
          <Link to="/contact" className="hover:text-emerald-800">Contact</Link>
        </nav>
      </header>

      <main className="flex-grow max-w-4xl w-full mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#2C3E35' }}>Our Philosophy</h1>
          <p className="text-sm font-sans text-gray-500 leading-relaxed">Novella was founded with a single mission: to shield active reading habits from digital noise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif" style={{ color: '#2C3E35' }}>Why a Digital Shelf?</h3>
            <p className="text-sm font-sans text-gray-500 leading-relaxed mb-4">In an age of constant push notifications, setting continuous time aside to process literature has become rare.</p>
            <p className="text-sm font-sans text-gray-500 leading-relaxed">We don't track metrics to make reading a hyper-productive competition; we map progress simply to celebrate your internal journey.</p>
          </div>
          <div className="p-8 rounded-2xl border bg-white flex flex-col gap-6" style={{ borderColor: '#EAE6DF' }}>
            <div className="flex gap-4 items-start">
              <div className="p-2 rounded-lg bg-[#F0F7F4] shrink-0"><Feather size={16} className="text-emerald-800" /></div>
              <div>
                <h4 className="font-bold text-sm" style={{ color: '#2C3E35' }}>Designed for Writers</h4>
                <p className="text-xs font-sans text-gray-400 mt-0.5">Typographic hierarchies carefully crafted to stay out of focus focus.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-2 rounded-lg bg-[#EBF5FB] shrink-0"><ShieldCheck size={16} className="text-blue-800" /></div>
              <div>
                <h4 className="font-bold text-sm" style={{ color: '#2C3E35' }}>Complete Integrity</h4>
                <p className="text-xs font-sans text-gray-400 mt-0.5">Your reading logs are highly secured. Zero tracking or commercial pixels.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- 3. CONTACT PAGE COMPONENT WITH NAVBAR LINKS ---
const Contact = () => {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen flex flex-col font-serif" style={{ backgroundColor: '#FFFDF9', color: '#1A1A1A' }}>
      <header className="flex justify-between items-center px-8 py-5 border-b bg-[#FFFDF9]" style={{ borderColor: '#EAE6DF' }}>
        <Link to="/home" className="flex items-center gap-2 cursor-pointer">
          <BookOpen size={24} style={{ color: '#2C3E35' }} />
          <span className="text-xl font-bold tracking-wider" style={{ color: '#2C3E35' }}>NOVELLA</span>
        </Link>
        <nav className="flex items-center gap-8 font-sans text-sm text-gray-600">
          <Link to="/home" className="hover:text-emerald-800">Home</Link>
          <Link to="/about" className="hover:text-emerald-800">About</Link>
          <Link to="/contact" className="hover:text-emerald-800 font-medium text-emerald-800">Contact</Link>
        </nav>
      </header>

      <main className="flex-grow max-w-lg w-full mx-auto px-6 py-16 flex flex-col justify-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ color: '#2C3E35' }}>Correspondence</h1>
          <p className="text-sm font-sans text-gray-400">Have feedback, support requests, or partnership ideas? Send us a letter.</p>
        </div>
        <div className="bg-white rounded-2xl border p-8 shadow-xs" style={{ borderColor: '#EAE6DF' }}>
          {sent ? (
            <div className="text-center py-8 font-sans">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4 text-emerald-800"><Send size={20} /></div>
              <h4 className="font-serif font-bold text-lg mb-1" style={{ color: '#2C3E35' }}>Message Dispatched</h4>
              <p className="text-xs text-gray-400">Our curator team will get back to you within 24 standard hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 font-sans text-sm">
              <div>
                <label className="block text-gray-600 font-medium mb-1.5">Your Name</label>
                <input type="text" required placeholder="Writer Name" className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-1" style={{ borderColor: '#EAE6DF' }} />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
                  <input type="email" required placeholder="reader@example.com" className="w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-1" style={{ borderColor: '#EAE6DF' }} />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1.5">Your Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={16} />
                  <textarea rows="4" required placeholder="Type your thoughts here..." className="w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-1 resize-none" style={{ borderColor: '#EAE6DF' }}></textarea>
                </div>
              </div>
              <button type="submit" className="w-full py-3 rounded-xl text-white font-medium shadow-sm flex items-center justify-center gap-2 hover:opacity-95" style={{ backgroundColor: '#2C3E35' }}>
                Send Message <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

// ==========================================
// MAIN APP ROUTING SYSTEM
// ==========================================
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Authentication Routes */}
          <Route path="/" element={<SignupForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </Route>

          {/* Strictly Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;