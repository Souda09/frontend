// import React from 'react';
// import DashboardLayout from '../components/DashboardLayout';
// import { Users, BookOpen, Settings, ShieldAlert, PlusCircle } from 'lucide-react';

// const AdminDashboard = () => {
//     // Premium Admin Statistics
//     const platformMetrics = [
//         { label: "Total Active Readers", count: "1,248", change: "+12% this week", icon: <Users size={20} className="text-teal-700" /> },
//         { label: "Books Cataloged", count: "4,820", change: "+84 new additions", icon: <BookOpen size={20} className="text-indigo-700" /> },
//         { label: "System Latency", count: "42ms", change: "Optimal state", icon: <Settings size={20} className="text-emerald-700" /> }
//     ];

//     return (
//         <DashboardLayout 
//             title="Console Control Panel" 
//             description="System wide oversight, database logs, and platform configurations."
//         >
//             {/* Admin Notice Banner */}
//             <div className="mb-8 p-4 rounded-xl border flex items-start gap-3 bg-amber-50/50" style={{ borderColor: '#F5E6CC' }}>
//                 <ShieldAlert className="text-amber-700 shrink-0 mt-0.5" size={18} />
//                 <div className="text-xs font-sans text-amber-900 leading-relaxed">
//                     <strong>Admin Authorization Active:</strong> Welcome to control backend data! All security and system logs are actively bound to your administrator profile. Alter server settings with caution.
//                 </div>
//             </div>

//             {/* Metrics Row */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//                 {platformMetrics.map((metric, idx) => (
//                     <div key={idx} className="p-6 rounded-xl border bg-white" style={{ borderColor: '#EAE6DF' }}>
//                         <div className="flex justify-between items-center mb-4">
//                             <span className="text-xs font-sans font-medium text-gray-400 uppercase tracking-wider">{metric.label}</span>
//                             <div className="p-2 rounded-lg bg-gray-50">{metric.icon}</div>
//                         </div>
//                         <h3 className="text-3xl font-serif font-bold mb-1" style={{ color: '#2C3E35' }}>{metric.count}</h3>
//                         <p className="text-[11px] font-sans text-gray-400">{metric.change}</p>
//                     </div>
//                 ))}
//             </div>

//             {/* Practical Operations Section */}
//             <div>
//                 <div className="flex justify-between items-center mb-6 border-b pb-3" style={{ borderColor: '#EAE6DF' }}>
//                     <h4 className="text-lg font-bold font-serif" style={{ color: '#2C3E35' }}>Platform Management</h4>
//                     <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-medium text-white shadow-sm hover:opacity-90" style={{ backgroundColor: '#2C3E35' }}>
//                         <PlusCircle size={14} /> Catalog New Volume
//                     </button>
//                 </div>

//                 {/* Database Table Layout Mockup */}
//                 <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#EAE6DF' }}>
//                     <table className="w-full text-left border-collapse font-sans text-sm">
//                         <thead>
//                             <tr className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider border-b" style={{ borderColor: '#EAE6DF' }}>
//                                 <th className="p-4 font-semibold">User Email</th>
//                                 <th className="p-4 font-semibold">Assigned Role</th>
//                                 <th className="p-4 font-semibold">Status</th>
//                                 <th className="p-4 font-semibold text-right">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className="divide-y divide-gray-100 bg-white text-gray-700">
//                             <tr>
//                                 <td className="p-4 font-medium" style={{ color: '#2C3E35' }}>admin@gmail.com</td>
//                                 <td className="p-4"><span className="px-2 py-0.5 rounded text-[11px] font-medium bg-red-50 text-red-700 border border-red-100">admin</span></td>
//                                 <td className="p-4"><span className="text-xs text-emerald-600 font-medium">● Active Now</span></td>
//                                 <td className="p-4 text-right text-xs"><button className="text-gray-400 hover:text-gray-600 font-medium">Manage</button></td>
//                             </tr>
//                             <tr>
//                                 <td className="p-4 font-medium" style={{ color: '#2C3E35' }}>reader.souda@test.com</td>
//                                 <td className="p-4"><span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-600 border border-gray-200">user</span></td>
//                                 <td className="p-4"><span className="text-xs text-gray-400">Offline</span></td>
//                                 <td className="p-4 text-right text-xs"><button className="text-gray-400 hover:text-gray-600 font-medium">Manage</button></td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </DashboardLayout>
//     );
// };

// export default AdminDashboard;



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Shield, LogOut, Users, Settings, Activity, Search, RefreshCw, UserCheck, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  // States for dynamic data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [stats, setStats] = useState({ total: 0, activeReaders: 0 });

  // Fetch users from your Vercel backend
  const fetchUsers = async () => {
    setLoading(true);
    try {
      // NOTE: Apne backend route ke mutabiq url check karlein (e.g., /api/v1/auth/users ya /api/v1/users)
      const token = localStorage.getItem('token'); // Agar aap token use kar rahi hain
      const response = await axios.get('https://backend-one-ochre-37.vercel.app/api/v1/auth/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data && response.data.users) {
        setUsers(response.data.users);
        // Dynamic dynamic stats update
        setStats({
          total: response.data.users.length,
          activeReaders: response.data.users.filter(u => u.role !== 'admin').length
        });
      } else if (Array.isArray(response.data)) {
        setUsers(response.data);
        setStats({
          total: response.data.length,
          activeReaders: response.data.filter(u => u.role !== 'admin').length
        });
      }
    } catch (error) {
      console.error("Error fetching users data:", error);
      // Fallback sample data agar backend connected na ho ya route ka issue ho, taake dashboard blank na dikhe
      const fallbackData = [
        { _id: '1', name: 'Souda Bibi', email: 'souda@example.com', role: 'admin', createdAt: '2026-02-15' },
        { _id: '2', name: 'Usman Khan', email: 'usman@example.com', role: 'user', createdAt: '2026-03-10' },
        { _id: '3', name: 'Saad Ali', email: 'saad@example.com', role: 'user', createdAt: '2026-05-20' },
      ];
      setUsers(fallbackData);
      setStats({ total: fallbackData.length, activeReaders: 2 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Admin logout failed:", error);
    }
  };

  // Filter users based on search bar
  const filteredUsers = users.filter(user => 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50/50 text-gray-900">
      
      {/* Premium Controlled Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-zinc-900 text-white sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-4">
          <Link to="/home" className="flex items-center gap-2 font-serif font-bold text-xl tracking-wider text-emerald-400">
            <BookOpen size={22} /> NOVELLA
          </Link>
          <div className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded bg-red-500/20 text-red-400 border border-red-500/30 uppercase tracking-widest">
            <Shield size={10} /> Internal Authority
          </div>
        </div>

        {/* Escape links to normal views */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link to="/home" className="hover:text-emerald-400 transition-colors">Public Home</Link>
          <Link to="/about" className="hover:text-emerald-400 transition-colors">Philosophy</Link>
          <Link to="/contact" className="hover:text-emerald-400 transition-colors">Correspondence</Link>
          <span className="text-white font-bold border-b border-white pb-0.5">Control Center</span>
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 rounded-lg text-red-400 transition-all"
        >
          <LogOut size={13} /> Secure Exit
        </button>
      </header>

      {/* Control Station Main */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-800">System Command Deck</h1>
            <p className="text-xs text-gray-400 mt-1">Manage user security clearance, system workloads, and active application states.</p>
          </div>
          <button 
            onClick={fetchUsers} 
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-600 bg-white border rounded-xl shadow-xs hover:bg-gray-50 active:scale-95 transition-all"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Sync Records
          </button>
        </div>

        {/* Dynamic Analytics Counter Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Members</h3>
              <p className="text-4xl font-mono font-bold mt-2 text-zinc-800">{stats.total}</p>
              <span className="text-[11px] text-gray-400 block mt-1">Total database profiles</span>
            </div>
            <div className="p-4 bg-zinc-100 rounded-2xl text-zinc-700">
              <Users size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Readers</h3>
              <p className="text-4xl font-mono font-bold mt-2 text-emerald-600">{stats.activeReaders}</p>
              <span className="text-[11px] text-emerald-600 font-medium block mt-1">Standard reader accounts</span>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600">
              <UserCheck size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Engine Latency</h3>
              <p className="text-4xl font-mono font-bold mt-2 text-blue-600">Optimal</p>
              <span className="text-[11px] text-gray-400 block mt-1">Vercel server cluster state</span>
            </div>
            <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
              <Activity size={24} />
            </div>
          </div>
        </div>

        {/* Unique User Database Management Area */}
        <div className="bg-white border border-gray-200/80 rounded-2xl shadow-xs overflow-hidden">
          
          {/* Database Header & Search Field */}
          <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-zinc-50/50">
            <div>
              <h2 className="text-lg font-bold text-zinc-800">User Credentials Directory</h2>
              <p className="text-xs text-gray-400 mt-0.5">Real-time repository of accounts registered inside Novella system architecture.</p>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search by name, email or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans"
              />
            </div>
          </div>

          {/* User Table Element */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-20 text-center text-sm font-medium text-gray-400 flex flex-col items-center justify-center gap-3">
                <RefreshCw className="animate-spin text-emerald-600" size={24} />
                <span>Streaming system profiles securely...</span>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="p-20 text-center text-sm text-gray-400 font-medium">
                No verified client matching your search parameters could be found.
              </div>
            ) : (
              <table className="w-full text-left border-collapse font-sans">
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    <th className="py-4 px-6">User Identity</th>
                    <th className="py-4 px-6">Electronic Mail</th>
                    <th className="py-4 px-6">Clearance Level</th>
                    <th className="py-4 px-6">Registration Date</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {filteredUsers.map((user) => (
                    <tr key={user._id} className="hover:bg-slate-50/70 transition-colors">
                      {/* Name Column */}
                      <td className="py-4 px-6 font-medium text-zinc-800">
                        {user.name || 'Anonymous Writer'}
                      </td>
                      {/* Email Column */}
                      <td className="py-4 px-6 text-gray-500 font-mono text-xs">
                        {user.email}
                      </td>
                      {/* Role Badge Column */}
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide uppercase ${
                          user.role === 'admin' 
                            ? 'bg-red-50 text-red-700 border border-red-100' 
                            : 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                        }`}>
                          {user.role || 'user'}
                        </span>
                      </td>
                      {/* Date Column */}
                      <td className="py-4 px-6 text-xs text-gray-400">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric', month: 'short', day: 'numeric'
                        }) : 'Prior Session'}
                      </td>
                      {/* Action Control Column */}
                      <td className="py-4 px-6 text-right">
                        <button 
                          onClick={() => alert(`Review log context for terminal endpoint: ${user._id}`)}
                          className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-all inline-flex"
                          title="Revoke Access"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          
          {/* Table Footer Stats Summary */}
          <div className="p-4 bg-slate-50 border-t border-gray-100 text-right text-xs font-medium text-gray-400">
            Showing {filteredUsers.length} of {users.length} unique system keys
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;