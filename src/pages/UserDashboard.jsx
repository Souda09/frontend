import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const UserDashboard = () => {
    return (
        <DashboardLayout 
            title="User Library Dashboard" 
            description="Welcome back to your personalized bookshelf and reading logs."
        >
            <div className="p-4 bg-gray-50 rounded border border-dashed border-gray-300 text-center text-gray-600">
                📚 Aapka reading shelf khali hai. Navigations se naye novels explore karein!
            </div>
        </DashboardLayout>
    );
};

export default UserDashboard;