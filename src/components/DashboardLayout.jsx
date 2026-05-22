import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, BookOpen, User } from 'lucide-react';

const DashboardLayout = ({ title, description, children }) => {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen flex flex-col font-serif" style={{ backgroundColor: '#FFFDF9', color: '#1A1A1A' }}>
            {/* Aesthetic Premium Navbar */}
            <nav className="flex justify-between items-center px-8 py-4 border-b" style={{ borderColor: '#EAE6DF' }}>
                <div className="flex items-center gap-2">
                    <BookOpen size={24} style={{ color: '#2C3E35' }} />
                    <span className="text-xl font-bold tracking-wider" style={{ color: '#2C3E35' }}>NOVELLA</span>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User size={16} />
                        <span>Logged in as: <strong style={{ color: '#2C3E35' }}>{user?.name}</strong> ({user?.role})</span>
                    </div>
                    <button 
                        onClick={logout}
                        className="flex items-center gap-2 px-4 py-1.5 text-sm rounded border transition-all duration-200 hover:opacity-80"
                        style={{ borderColor: '#2C3E35', color: '#2C3E35' }}
                    >
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </nav>

            {/* Dashboard Container */}
            <div className="max-w-6xl w-full mx-auto px-6 py-10 flex-grow">
                {/* Global Heading Component Pattern - Dynamic text handles automatically */}
                <div className="mb-8 border-b pb-4" style={{ borderColor: '#EAE6DF' }}>
                    <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#2C3E35' }}>{title}</h2>
                    <p className="text-sm mt-1 text-gray-500">{description}</p>
                </div>

                {/* Main Dynamic View Box */}
                <main className="bg-white rounded-lg border p-6 shadow-sm" style={{ borderColor: '#EAE6DF' }}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;