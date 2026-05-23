// import React from 'react';
// import DashboardLayout from '../components/DashboardLayout';
// import { Book, Clock, Award, ArrowUpRight } from 'lucide-react';

// const UserDashboard = () => {
//     // Temporary static data for UI preview
//     const readingStats = [
//         { title: "Books Completed", value: "12", icon: <Award size={20} className="text-emerald-700" />, bg: "#F0F7F4" },
//         { title: "Currently Reading", value: "3", icon: <Book size={20} className="text-amber-700" />, bg: "#FEF9E7" },
//         { title: "Reading Hours", value: "48h", icon: <Clock size={20} className="text-blue-700" />, bg: "#EBF5FB" },
//     ];

//     const currentBooks = [
//         { title: "The Great Gatsby", author: "F. Scott Fitzgerald", progress: 75, coverColor: "#1A3636" },
//         { title: "Pride and Prejudice", author: "Jane Austen", progress: 40, coverColor: "#40534C" },
//         { title: "To Kill a Mockingbird", author: "Harper Lee", progress: 15, coverColor: "#677D6A" }
//     ];

//     return (
//         <DashboardLayout 
//             title="User Library Dashboard" 
//             description="Welcome back to your personalized bookshelf and reading logs."
//         >
//             {/* Quick Analytics Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//                 {readingStats.map((stat, idx) => (
//                     <div 
//                         key={idx} 
//                         className="p-5 rounded-xl border flex items-center justify-between transition-transform duration-200 hover:-translate-y-1"
//                         style={{ borderColor: '#EAE6DF', backgroundColor: '#FFF' }}
//                     >
//                         <div>
//                             <p className="text-xs font-sans uppercase tracking-wider text-gray-400 mb-1">{stat.title}</p>
//                             <h4 className="text-3xl font-bold font-serif" style={{ color: '#2C3E35' }}>{stat.value}</h4>
//                         </div>
//                         <div className="p-3 rounded-lg" style={{ backgroundColor: stat.bg }}>
//                             {stat.icon}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* In Progress Bookshelf */}
//             <div>
//                 <div className="flex justify-between items-center mb-6">
//                     <h3 className="text-xl font-bold tracking-tight font-serif" style={{ color: '#2C3E35' }}>Your Active Shelf</h3>
//                     <button className="text-xs font-sans font-medium flex items-center gap-1 hover:underline text-gray-500">
//                         View All Books <ArrowUpRight size={14} />
//                     </button>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {currentBooks.map((book, idx) => (
//                         <div 
//                             key={idx} 
//                             className="group p-5 rounded-xl border flex flex-col justify-between transition-all duration-300 hover:shadow-md bg-white"
//                             style={{ borderColor: '#EAE6DF' }}
//                         >
//                             <div className="flex gap-4 mb-4">
//                                 {/* Minimalist Book Cover Icon Box */}
//                                 <div 
//                                     className="w-16 h-24 rounded shadow-sm flex items-end p-2 text-white font-serif font-bold text-[10px] uppercase tracking-tighter shrink-0"
//                                     style={{ backgroundColor: book.coverColor }}
//                                 >
//                                     Novella
//                                 </div>
//                                 <div className="flex flex-col justify-center">
//                                     <h4 className="font-serif font-bold text-base leading-tight group-hover:text-emerald-800 transition-colors duration-200" style={{ color: '#1A1A1A' }}>
//                                         {book.title}
//                                     </h4>
//                                     <p className="text-xs text-gray-400 font-sans mt-1">By {book.author}</p>
//                                 </div>
//                             </div>

//                             {/* Custom Aesthetic Progress Bar */}
//                             <div className="mt-2">
//                                 <div className="flex justify-between text-xs font-sans text-gray-400 mb-1.5">
//                                     <span>Progress</span>
//                                     <span className="font-medium text-gray-600">{book.progress}%</span>
//                                 </div>
//                                 <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
//                                     <div 
//                                         className="h-full rounded-full transition-all duration-500" 
//                                         style={{ width: `${book.progress}%`, backgroundColor: '#2C3E35' }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </DashboardLayout>
//     );
// };

// export default UserDashboard;













import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, LogOut, Layout, BookOpenCheck, Clock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext'; // Agar aapka auth hook ka naam alag hai to adjust karlein

const UserDashboard = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ backgroundColor: '#FCFBFA', color: '#1A1A1A' }}>
      
      {/* Dynamic Navbar for Dashboard Navigation */}
      <header className="flex justify-between items-center px-8 py-4 border-b bg-white sticky top-0 z-50" style={{ borderColor: '#EAE6DF' }}>
        <div className="flex items-center gap-6">
          <Link to="/home" className="flex items-center gap-2 font-serif font-bold text-xl tracking-wider text-emerald-900">
            <BookOpen size={22} /> NOVELLA
          </Link>
          <span className="hidden md:inline px-2.5 py-1 text-xs font-medium rounded bg-emerald-50 text-emerald-800 uppercase tracking-wider">
            Reader Space
          </span>
        </div>

        {/* Links to move across pages */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="/home" className="hover:text-emerald-800 transition-colors">Home View</Link>
          <Link to="/about" className="hover:text-emerald-800 transition-colors">About Philosophy</Link>
          <Link to="/contact" className="hover:text-emerald-800 transition-colors">Correspondence</Link>
          <Link to="/dashboard" className="text-emerald-800 font-bold border-b-2 border-emerald-800 pb-1">Dashboard</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-all"
          >
            <LogOut size={14} /> Exit
          </button>
        </div>
      </header>

      {/* Inside Workspace */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-6 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-800">Welcome Back, Writer</h1>
          <p className="text-sm text-gray-400 mt-1">Here is the active state of your literary reading metrics.</p>
        </div>

        {/* Analytical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl border" style={{ borderColor: '#EAE6DF' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Shelf</span>
              <BookOpenCheck className="text-emerald-700" size={18} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">12 Books</h2>
            <p className="text-xs text-emerald-700 mt-1">3 completed this month</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border" style={{ borderColor: '#EAE6DF' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Reading Velocity</span>
              <Clock className="text-amber-600" size={18} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">45 min/day</h2>
            <p className="text-xs text-gray-400 mt-1">Consistent internal rhythm</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border" style={{ borderColor: '#EAE6DF' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Profile Status</span>
              <User className="text-blue-600" size={18} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 truncate">{user?.email || 'Premium Member'}</h2>
            <p className="text-xs text-gray-400 mt-2">Role: Standard Reader</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;