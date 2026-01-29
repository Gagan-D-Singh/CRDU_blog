import { createContext, useState } from "react";

interface AuthContextType {
    auth: boolean;
    setAuth: (auth: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({children} : AuthProviderProps) => {
    const [auth, setAuth] = useState(false);
    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
