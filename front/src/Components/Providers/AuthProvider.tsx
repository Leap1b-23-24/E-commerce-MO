"use client";
import { api } from "@/app/common/axios";
import { AxiosError } from "axios";
import Error from "next/error";
import {
  useContext,
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { toast } from "react-toastify";

type AuthContextType = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  signUp: (
    userName: string,
    email: string,
    merchName: string,
    city: string,
    district: string,
    khoroo: string,
    experience: string,
    merchType: string,
    password: string
  ) => void;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

//Sign-Up function
const signUp = async (
  userName: string,
  email: string,
  merchName: string,
  city: string,
  district: string,
  khoroo: string,
  experience: string,
  merchType: string,
  password: string
) => {
  try {
    const { data } = await api.post("auth/signUp", {
      userName,
      email,
      merchName,
      city,
      district,
      khoroo,
      experience,
      merchType,
      password,
    });
    toast.success(data.message, {
      position: "top-center",
      hideProgressBar: true,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message ?? error.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    }
    console.log(error), "FFF";
  }
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
