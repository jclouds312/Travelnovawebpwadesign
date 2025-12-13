import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type User = {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string | null;
  role?: string | null;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = "figma-builder-token";
const MOCK_USER: User = {
  id: "mock-user-id",
  username: "john474nvallejo",
  email: "john474nvallejo@example.com",
  avatarUrl: "https://github.com/shadcn.png",
  role: "admin"
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate session check
    const storedToken = localStorage.getItem(TOKEN_KEY);
    if (storedToken) {
      setUser(MOCK_USER);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Accept the specific user requested or any valid looking email
    if (email.includes("john474nvallejo") || email === "john474nvallejo" || password === "password") {
       const mockToken = "mock-jwt-token-" + Date.now();
       localStorage.setItem(TOKEN_KEY, mockToken);
       setToken(mockToken);
       setUser({
         ...MOCK_USER,
         email: email.includes("@") ? email : MOCK_USER.email,
         username: email.includes("@") ? email.split("@")[0] : email
       });
       return;
    }

    // Default mock success for other credentials too in mockup mode
    const mockToken = "mock-jwt-token-" + Date.now();
    localStorage.setItem(TOKEN_KEY, mockToken);
    setToken(mockToken);
    setUser({
      ...MOCK_USER,
      email: email,
      username: email.split("@")[0] || email
    });
  };

  const register = async (username: string, email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockToken = "mock-jwt-token-" + Date.now();
    localStorage.setItem(TOKEN_KEY, mockToken);
    setToken(mockToken);
    setUser({
      id: "new-user-" + Date.now(),
      username,
      email,
      avatarUrl: null,
      role: "user"
    });
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function getAuthToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}
