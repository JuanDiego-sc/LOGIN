import { useContext, createContext, useState} from "react";
import axios from "axios";

interface AuthContextProps {
    isAuthenticated: boolean;
    role: string | null;
    userName: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    role: '',
    userName: '',
    login: async () => {},
    logout: () => {},
});


export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState<string | null>(null);
    const [userName, setUserName] = useState<string | null>(null);
      
    const login = async (email: string, password: string) => {

        try {
            const response = await axios.get(`https://localhost:5002/api/auth/${email}/${password}`);
            const user = response.data[0];
            setIsAuthenticated(true);
            setRole(user.role);
            setUserName(user.name);
        } catch (error) {
            alert("Login failed. Please check your credentials.");
            console.error(error);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setRole(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, role, login, logout, userName }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
