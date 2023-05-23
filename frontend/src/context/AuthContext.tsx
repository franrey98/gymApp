import { createContext, useState, useEffect } from "react";
import { API_URL_BASE_BMI, API_KEY } from "@env";
import axios from "axios";
import { Props } from "../types/props";
import { toastAlert } from "../utils/alerts";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextState {
  register: (values: any) => Promise<void>;
  login: (values: any) => Promise<void>;
  loginData: null;
  isLoading: boolean;
  fetchLoginData: () => Promise<void>;
  logout: () => Promise<void>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextState | null>(null);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [loginData, setLoginData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchLoginData();
  }, []);

  const fetchLoginData = async () => {
    setIsLoading(true);
    try {
      const storedLoginData = await AsyncStorage.getItem("loginData");
      if (storedLoginData) {
        setLoginData(JSON.parse(storedLoginData));
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Error al recuperar los datos de inicio de sesión:", error);
    }
  };

  const register = async (values: any) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.0.77:3900/api/user/register",
        values
      );
      console.log("respuesta del post", response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (values: any) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.0.77:3900/api/user/login",
        values
      );
      console.log("respuesta del post", response.data);

      await AsyncStorage.setItem("loginData", JSON.stringify(response.data));
      setLoginData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("axios error: ", error);
    }
  };

  const logout = async () => {
    AsyncStorage.removeItem("loginData");
    setLoginData(null);
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        isLoading,
        setIsLoading,
        fetchLoginData,
        loginData,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
