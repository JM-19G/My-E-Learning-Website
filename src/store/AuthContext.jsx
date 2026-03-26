import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Fake login for demo
    if (email && password) {
      const fakeUser = { id: 1, name: "Manoah", email };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // ← Custom hook #1