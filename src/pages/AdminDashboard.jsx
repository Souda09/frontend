import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Users, BookOpen, Settings, ShieldAlert, PlusCircle } from 'lucide-react';

const AdminDashboard = () => {
    // Premium Admin Statistics
    const platformMetrics = [
        { label: "Total Active Readers", count: "1,248", change: "+12% this week", icon: <Users size={20} className="text-teal-700" /> },
        { label: "Books Cataloged", count: "4,820", change: "+84 new additions", icon: <BookOpen size={20} className="text-indigo-700" /> },
        { label: "System Latency", count: "42ms", change: "Optimal state", icon: <Settings size={20} className="text-emerald-700" /> }
    ];

    return (
        <DashboardLayout 
            title="Console Control Panel" 
            description="System wide oversight, database logs, and platform configurations."
        >
            {/* Admin Notice Banner */}
            <div className="mb-8 p-4 rounded-xl border flex items-start gap-3 bg-amber-50/50" style={{ borderColor: '#F5E6CC' }}>
                <ShieldAlert className="text-amber-700 shrink-0 mt-0.5" size={18} />
                <div className="text-xs font-sans text-amber-900 leading-relaxed">
                    <strong>Admin Authorization Active:</strong> Welcome to control backend data! All security and system logs are actively bound to your administrator profile. Alter server settings with caution.
                </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {platformMetrics.map((metric, idx) => (
                    <div key={idx} className="p-6 rounded-xl border bg-white" style={{ borderColor: '#EAE6DF' }}>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-sans font-medium text-gray-400 uppercase tracking-wider">{metric.label}</span>
                            <div className="p-2 rounded-lg bg-gray-50">{metric.icon}</div>
                        </div>
                        <h3 className="text-3xl font-serif font-bold mb-1" style={{ color: '#2C3E35' }}>{metric.count}</h3>
                        <p className="text-[11px] font-sans text-gray-400">{metric.change}</p>
                    </div>
                ))}
            </div>

            {/* Practical Operations Section */}
            <div>
                <div className="flex justify-between items-center mb-6 border-b pb-3" style={{ borderColor: '#EAE6DF' }}>
                    <h4 className="text-lg font-bold font-serif" style={{ color: '#2C3E35' }}>Platform Management</h4>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-medium text-white shadow-sm hover:opacity-90" style={{ backgroundColor: '#2C3E35' }}>
                        <PlusCircle size={14} /> Catalog New Volume
                    </button>
                </div>

                {/* Database Table Layout Mockup */}
                <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#EAE6DF' }}>
                    <table className="w-full text-left border-collapse font-sans text-sm">
                        <thead>
                            <tr className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider border-b" style={{ borderColor: '#EAE6DF' }}>
                                <th className="p-4 font-semibold">User Email</th>
                                <th className="p-4 font-semibold">Assigned Role</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white text-gray-700">
                            <tr>
                                <td className="p-4 font-medium" style={{ color: '#2C3E35' }}>admin@gmail.com</td>
                                <td className="p-4"><span className="px-2 py-0.5 rounded text-[11px] font-medium bg-red-50 text-red-700 border border-red-100">admin</span></td>
                                <td className="p-4"><span className="text-xs text-emerald-600 font-medium">● Active Now</span></td>
                                <td className="p-4 text-right text-xs"><button className="text-gray-400 hover:text-gray-600 font-medium">Manage</button></td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium" style={{ color: '#2C3E35' }}>reader.souda@test.com</td>
                                <td className="p-4"><span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-600 border border-gray-200">user</span></td>
                                <td className="p-4"><span className="text-xs text-gray-400">Offline</span></td>
                                <td className="p-4 text-right text-xs"><button className="text-gray-400 hover:text-gray-600 font-medium">Manage</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AdminDashboard;