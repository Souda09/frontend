import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, Compass, Bookmark, Feather } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col font-serif" style={{ backgroundColor: '#FFFDF9', color: '#1A1A1A' }}>
            
            {/* Top Minimal Header */}
            <header className="flex justify-between items-center px-8 py-5 border-b" style={{ borderColor: '#EAE6DF' }}>
                <div className="flex items-center gap-2">
                    <BookOpen size={24} style={{ color: '#2C3E35' }} />
                    <span className="text-xl font-bold tracking-wider" style={{ color: '#2C3E35' }}>NOVELLA</span>
                </div>
                <div className="flex items-center gap-4 font-sans text-sm">
                    <button 
                        onClick={() => navigate('/login')} 
                        className="px-5 py-2 rounded-full transition-colors font-medium hover:text-emerald-800"
                        style={{ color: '#2C3E35' }}
                    >
                        Sign In
                    </button>
                    <button 
                        onClick={() => navigate('/register')} 
                        className="px-5 py-2 rounded-full text-white font-medium transition-transform duration-200 active:scale-95 shadow-sm"
                        style={{ backgroundColor: '#2C3E35' }}
                    >
                        Get Started
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-grow max-w-5xl w-full mx-auto px-6 py-20 flex flex-col items-center text-center justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans tracking-wide text-gray-500 mb-6 bg-white shadow-sm" style={{ borderColor: '#EAE6DF' }}>
                    <Feather size={12} className="text-emerald-700" /> Digital Sanctuary For Bibliophiles
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.15]" style={{ color: '#2C3E35' }}>
                    Your personal universe, bound in lines of prose.
                </h1>
                
                <p className="mt-6 text-base md:text-lg text-gray-500 font-sans max-w-xl leading-relaxed">
                    Track your reading logs, organize digital bookshelves, and discover deeper literary connections in a space built for focus.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 font-sans">
                    <button 
                        onClick={() => navigate('/login')}
                        className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-medium shadow-md transition-all duration-200 hover:opacity-90"
                        style={{ backgroundColor: '#2C3E35' }}
                    >
                        Enter Your Library <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                </div>

                {/* Aesthetic Highlight Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-24 max-w-4xl border-t pt-12 text-left" style={{ borderColor: '#EAE6DF' }}>
                    <div className="flex gap-4">
                        <div className="p-3 rounded-xl shrink-0 h-fit" style={{ backgroundColor: '#F0F7F4' }}>
                            <Bookmark size={20} style={{ color: '#2C3E35' }} />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg" style={{ color: '#2C3E35' }}>Curated Bookshelves</h3>
                            <p className="text-sm font-sans text-gray-400 mt-1 leading-relaxed">Organize your volumes by custom logs, genre status, or currently active bookmarks smoothly.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="p-3 rounded-xl shrink-0 h-fit" style={{ backgroundColor: '#FEF9E7' }}>
                            <Compass size={20} style={{ color: '#B37D14' }} />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg" style={{ color: '#2C3E35' }}>Insightful Progress</h3>
                            <p className="text-sm font-sans text-gray-400 mt-1 leading-relaxed">Visualize reading velocity and habits through dynamic minimalistic scorecards.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 text-center text-xs font-sans border-t text-gray-400" style={{ borderColor: '#EAE6DF' }}>
                &copy; {new Date().getFullYear()} NOVELLA Inc. All premium rights reserved.
            </footer>
        </div>
    );
};

export default Home; 