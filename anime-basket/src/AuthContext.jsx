import React, { createContext, useContext, useState } from 'react';
import { terminal } from 'virtual:terminal';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // terminal.log("Inside AuthProvider");
  // terminal.log("user: ", user);

  // signIn function to update the state
  const signIn = (userData) => {
    terminal.log("Inside signIn in AuthProvider");
    setUser(userData);
  };

  // signOut function to clear the state
  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => { 
  return useContext(AuthContext);
};
