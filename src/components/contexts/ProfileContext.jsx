import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const useProfileContext = () => {
  return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "grumpy19" });

  const login = (usr) => {
    setUser(usr);
  };

  return (
    <ProfileContext.Provider value={{ user, login }}>
      {children}
    </ProfileContext.Provider>
  );
};
