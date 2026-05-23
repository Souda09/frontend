import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Feather, ShieldCheck, Heart } from 'lucide-react';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col font-serif" style={{ backgroundColor: '#FFFDF9', color: '#1A1A1A' }}>
            {/* Header copy from home for layout uniformity */}
            <header className="flex justify-between items-center px-8 py-5 border-b bg-[#FFFDF9]" style={{ borderColor: '#EAE6DF' }}>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                    <BookOpen size={24} style={{ color: '#2C3E35' }} />
                    <span className="text-xl font-bold tracking-wider" style={{ color: '#2C3E35' }}>NOVELLA</span>
                </div>
                <nav className="flex items-center gap-8 font-sans text-sm text-gray-600">
                    <button onClick={() => navigate('/')} className="hover:text-emerald-800">Home</button>
                    <button onClick={() => navigate('/contact')} className="hover:text-emerald-800">Contact</button>
                </nav>
            </header>

            <main className="flex-grow max-w-4xl w-full mx-auto px-6 py-16">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#2C3E35' }}>Our Philosophy</h1>
                    <p className="text-sm font-sans text-gray-500 leading-relaxed">Novella was founded with a single mission: to shield active reading habits from digital noise.</p>
                </div>

                {/* Core Concept Block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 font-serif" style={{ color: '#2C3E35' }}>Why a Digital Shelf?</h3>
                        <p className="text-sm font-sans text-gray-500 leading-relaxed mb-4">
                            In an age of constant push notifications, setting continuous time aside to process literature has become rare. 
                        </p>
                        <p className="text-sm font-sans text-gray-500 leading-relaxed">
                            We don't track metrics to make reading a hyper-productive competition; we map progress simply to celebrate your internal journey.
                        </p>
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

                <div className="text-center border-t pt-12" style={{ borderColor: '#EAE6DF' }}>
                    <Heart size={20} className="mx-auto mb-3 text-red-700 opacity-60" />
                    <p className="text-xs font-sans text-gray-400">Lovingly engineered by developers who live inside independent bookshops.</p>
                </div>
            </main>
        </div>
    );
};

export default About;