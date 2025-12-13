import { createContext, useContext, useState, ReactNode } from "react";

type UserRole = "guest" | "user" | "admin";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  role: UserRole;
  loginAsUser: () => void;
  loginAsAdmin: () => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock Users
const MOCK_USER: User = {
  id: "u1",
  name: "Mateo Viajero",
  email: "mateo@travelnova.com",
  role: "user",
  avatar: "/attached_assets/generated_images/cool_male_traveler_avatar.png"
};

const MOCK_ADMIN: User = {
  id: "a1",
  name: "Super Admin",
  email: "admin@travelnova.com",
  role: "admin",
  avatar: "/attached_assets/generated_images/modern_female_adventurer_avatar.png"
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const loginAsUser = () => setUser(MOCK_USER);
  const loginAsAdmin = () => setUser(MOCK_ADMIN);
  const logout = () => setUser(null);

  const role: UserRole = user?.role || "guest";
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, role, loginAsUser, loginAsAdmin, logout, isAuthenticated }}>
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
