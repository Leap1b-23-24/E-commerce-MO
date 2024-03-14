"use client";
import {
  useContext,
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

type AuthContextType = {
  isLogged: boolean;

  setIsLogged: Dispatch<SetStateAction<boolean>>;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
