import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    const navigate = useNavigate();
    const [sent, setSent] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className="min-h-screen flex flex-col font-serif" style={{ backgroundColor: '#FFFDF9', color: '#1A1A1A' }}>
            {/* Header */}
            <header className="flex justify-between items-center px-8 py-5 border-b bg-[#FFFDF9]" style={{ borderColor: '#EAE6DF' }}>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                    <BookOpen size={24} style={{ color: '#2C3E35' }} />
                    <span className="text-xl font-bold tracking-wider" style={{ color: '#2C3E35' }}>NOVELLA</span>
                </div>
                <nav className="flex items-center gap-8 font-sans text-sm text-gray-600">
                    <button onClick={() => navigate('/')} className="hover:text-emerald-800">Home</button>
                    <button onClick={() => navigate('/about')} className="hover:text-emerald-800">About</button>
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
                            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4 text-emerald-800">
                                <Send size={20} />
                            </div>
                            <h4 className="font-serif font-bold text-lg mb-1" style={{ color: '#2C3E35' }}>Message Dispatched</h4>
                            <p className="text-xs text-gray-400">Thank you. Our curator team will get back to you within 24 standard hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-sm">
                            <div>
                                <label className="block text-gray-600 font-medium mb-1.5">Your Name</label>
                                <input 
                                    type="text" 
                                    required
                                    placeholder="Writer Name"
                                    className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-1 transition-all"
                                    style={{ borderColor: '#EAE6DF' }}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600 font-medium mb-1.5">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
                                    <input 
                                        type="email" 
                                        required
                                        placeholder="reader@example.com"
                                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-1 transition-all"
                                        style={{ borderColor: '#EAE6DF' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-600 font-medium mb-1.5">Your Message</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={16} />
                                    <textarea 
                                        rows="4"
                                        required
                                        placeholder="Type your thoughts here..."
                                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-1 transition-all resize-none"
                                        style={{ borderColor: '#EAE6DF' }}
                                    ></textarea>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full py-3 rounded-xl text-white font-medium shadow-sm transition-all duration-200 mt-2 flex items-center justify-center gap-2 hover:opacity-95"
                                style={{ backgroundColor: '#2C3E35' }}
                            >
                                Send Message <Send size={14} />
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Contact;