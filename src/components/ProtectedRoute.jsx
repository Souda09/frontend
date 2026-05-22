import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ allowedRoles }) => {
    const { user, isAuthenticated } = useAuth();

    // Agar user logged in nahi hai, toh use sidha Home page ('/') par bhej do
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Agar user logged in hai lekin uska role allowed nahi hai (e.g. user trying to access admin panel)
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/dashboard" replace />;
    }

    // Agar sab sahi hai, toh agla page render karo
    return <Outlet />;
};