import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userEmail = localStorage.getItem("userEmail");
        if (token) {
            setUser({ token, email: userEmail });
        }
    }, []);

    const login = (token, email) => {
        localStorage.setItem("token", token);
        localStorage.setItem("userEmail", email);
        setUser({ token, email });
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
