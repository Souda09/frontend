// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BookOpen, ArrowRight, Compass, Bookmark, Feather } from 'lucide-react';

// const Home = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="min-h-screen flex flex-col font-serif" style={{ backgroundColor: '#FFFDF9', color: '#1A1A1A' }}>
            
//             {/* Top Minimal Header */}
//             <header className="flex justify-between items-center px-8 py-5 border-b" style={{ borderColor: '#EAE6DF' }}>
//                 <div className="flex items-center gap-2">
//                     <BookOpen size={24} style={{ color: '#2C3E35' }} />
//                     <span className="text-xl font-bold tracking-wider" style={{ color: '#2C3E35' }}>NOVELLA</span>
//                 </div>
//                 <div className="flex items-center gap-4 font-sans text-sm">
//                     <button 
//                         onClick={() => navigate('/login')} 
//                         className="px-5 py-2 rounded-full transition-colors font-medium hover:text-emerald-800"
//                         style={{ color: '#2C3E35' }}
//                     >
//                         Sign In
//                     </button>
//                     <button 
//                         onClick={() => navigate('/register')} 
//                         className="px-5 py-2 rounded-full text-white font-medium transition-transform duration-200 active:scale-95 shadow-sm"
//                         style={{ backgroundColor: '#2C3E35' }}
//                     >
//                         Get Started
//                     </button>
//                 </div>
//             </header>

//             {/* Hero Section */}
//             <main className="flex-grow max-w-5xl w-full mx-auto px-6 py-20 flex flex-col items-center text-center justify-center">
//                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans tracking-wide text-gray-500 mb-6 bg-white shadow-sm" style={{ borderColor: '#EAE6DF' }}>
//                     <Feather size={12} className="text-emerald-700" /> Digital Sanctuary For Bibliophiles
//                 </div>
                
//                 <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.15]" style={{ color: '#2C3E35' }}>
//                     Your personal universe, bound in lines of prose.
//                 </h1>
                
//                 <p className="mt-6 text-base md:text-lg text-gray-500 font-sans max-w-xl leading-relaxed">
//                     Track your reading logs, organize digital bookshelves, and discover deeper literary connections in a space built for focus.
//                 </p>

//                 <div className="mt-10 flex flex-col sm:flex-row gap-4 font-sans">
//                     <button 
//                         onClick={() => navigate('/login')}
//                         className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-medium shadow-md transition-all duration-200 hover:opacity-90"
//                         style={{ backgroundColor: '#2C3E35' }}
//                     >
//                         Enter Your Library <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
//                     </button>
//                 </div>

//                 {/* Aesthetic Highlight Features Section */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-24 max-w-4xl border-t pt-12 text-left" style={{ borderColor: '#EAE6DF' }}>
//                     <div className="flex gap-4">
//                         <div className="p-3 rounded-xl shrink-0 h-fit" style={{ backgroundColor: '#F0F7F4' }}>
//                             <Bookmark size={20} style={{ color: '#2C3E35' }} />
//                         </div>
//                         <div>
//                             <h3 className="font-serif font-bold text-lg" style={{ color: '#2C3E35' }}>Curated Bookshelves</h3>
//                             <p className="text-sm font-sans text-gray-400 mt-1 leading-relaxed">Organize your volumes by custom logs, genre status, or currently active bookmarks smoothly.</p>
//                         </div>
//                     </div>

//                     <div className="flex gap-4">
//                         <div className="p-3 rounded-xl shrink-0 h-fit" style={{ backgroundColor: '#FEF9E7' }}>
//                             <Compass size={20} style={{ color: '#B37D14' }} />
//                         </div>
//                         <div>
//                             <h3 className="font-serif font-bold text-lg" style={{ color: '#2C3E35' }}>Insightful Progress</h3>
//                             <p className="text-sm font-sans text-gray-400 mt-1 leading-relaxed">Visualize reading velocity and habits through dynamic minimalistic scorecards.</p>
//                         </div>
//                     </div>
//                 </div>
//             </main>

//             {/* Footer */}
//             <footer className="py-6 text-center text-xs font-sans border-t text-gray-400" style={{ borderColor: '#EAE6DF' }}>
//                 &copy; {new Date().getFullYear()} NOVELLA Inc. All premium rights reserved.
//             </footer>
//         </div>
//     );
// };

// export default Home; 




import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Bookmark, Compass, Star, Feather } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-serif" style={{ backgroundColor: '#FFFDF9', color: '#1A1A1A' }}>
      {/* Premium Dedicated Navbar */}
      <header className="flex justify-between items-center px-8 py-5 border-b sticky top-0 bg-[#FFFDF9]/80 backdrop-blur-md z-50" style={{ borderColor: '#EAE6DF' }}>
        <Link to="/home" className="flex items-center gap-2 cursor-pointer">
          <BookOpen size={24} style={{ color: '#2C3E35' }} />
          <span className="text-xl font-bold tracking-wider font-sans" style={{ color: '#2C3E35' }}>NOVELLA</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-gray-600">
          <Link to="/home" className="text-emerald-800 font-semibold transition-colors">Home</Link>
          <Link to="/about" className="hover:text-emerald-800 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-emerald-800 transition-colors">Contact</Link>
          <Link to="/dashboard" className="hover:text-emerald-800 transition-colors">Dashboard</Link>
        </nav>
        <div className="flex items-center gap-4 font-sans text-sm">
          <Link to="/dashboard" className="px-5 py-2 font-medium text-white rounded-full transition-all" style={{ backgroundColor: '#2C3E35' }}>My Library</Link>
        </div>
      </header>

      {/* Main Content Sanctuary */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-20 flex flex-col items-center">
        <div className="text-center max-w-3xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans tracking-wide text-gray-500 mb-6 bg-white" style={{ borderColor: '#EAE6DF' }}>
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

        {/* Feature Grid */}
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

export default Home;