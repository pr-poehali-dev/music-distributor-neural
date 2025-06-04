import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, createContext, useContext } from "react";
import LoginPage from "@/pages/LoginPage";
import Dashboard from "@/pages/Dashboard";
import SubscriptionPage from "@/pages/SubscriptionPage";
import { Toaster } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  subscription: "free" | "artist" | "label";
}

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

function App() {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("soundflow_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("soundflow_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("soundflow_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Routes>
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <LoginPage />}
            />
            <Route
              path="/subscription"
              element={user ? <SubscriptionPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/*"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
