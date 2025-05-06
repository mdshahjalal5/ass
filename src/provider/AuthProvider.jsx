import AOS from "aos";
import "aos/dist/aos.css";
import { createContext, useEffect } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
