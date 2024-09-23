import React, { createContext, useState } from "react";

// Create a context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  // Fetch profile from localStorage and handle null case

  // Initialize state
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userName,
        setUserName,
        email,
        setEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
