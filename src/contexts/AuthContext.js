import { createContext } from "react";
import { useSessionSorage } from "../hooks/useSessionStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useSessionSorage('auth', {});
    return (
        <AuthContext.Provider value={{
            auth,
            setAuth,
        }}>
            {children}
        </AuthContext.Provider>  
    );
};