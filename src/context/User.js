import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used with a UserProvider");
  const { user, setUser } = context;
  return { user, setUser };
}

export { useUser };

export default UserProvider;
