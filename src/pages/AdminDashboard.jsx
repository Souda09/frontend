import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const AdminDashboard = () => {
    return (
        <DashboardLayout 
            title="Admin Control Panel" 
            description="Publish updates, add tracks, manage users, and configure novels metadata."
        >
            <div className="p-4 bg-emerald-50 text-emerald-800 rounded border border-emerald-200">
                ⚙️ Control Panel Active: Yahan aap naye novels upload karne ka form bana sakte hain.
            </div>
        </DashboardLayout>
    );
};

export default AdminDashboard;