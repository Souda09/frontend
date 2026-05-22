import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // [GET STORAGE]: Page refresh hote hi check karo user pehle se login hai ya nahi
    useEffect(() => {
        const storedUser = localStorage.getItem('novella_user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Storage parsing error:", error);
                localStorage.removeItem('novella_user');
            }
        }
        setLoading(false); // Check poora hone ke baad loading khatam
    }, []);

    // [SET STORAGE]: Login hone par user ka non-sensitive data save karna
    const login = (userData) => {
        const cleanUser = {
            id: userData._id || userData.id,
            name: userData.name,
            email: userData.email,
            role: userData.role
        };
        setUser(cleanUser);
        localStorage.setItem('novella_user', JSON.stringify(cleanUser));
    };

    // [CLEAR STORAGE]: Logout par sab saaf karna
    const logout = () => {
        setUser(null);
        localStorage.removeItem('novella_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);