import { createContext, useState, useEffect } from "react";
import { API_URL_BASE_BMI, API_KEY } from "@env";
import axios from "axios";
import { Props } from "../types/props";
import { toastAlert } from "../utils/alerts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginProps, LoginResponse, RegisterProps, User } from "../types/auth";

interface AuthContextState {
  register: (values: any) => Promise<void>;
  login: (values: any) => Promise<void>;
  loginData: LoginResponse | null;
  isLoading: boolean;
  dataUser: User | null;
  fetchLoginData: () => Promise<void>;
  logout: () => Promise<void>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getUserByID: (id: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextState | null>(null);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [loginData, setLoginData] = useState<LoginResponse | null>({
    status: "",
    message: "",
    user: {
      id: "",
      name: "",
      lastName: "",
      image: "",
      email: "",
    },
    token: "",
  });

  const [dataUser, setDataUser] = useState<User | null>(null);
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

  const register = async (values: RegisterProps) => {
    try {
      const response = await axios.post(
        "http://192.168.0.77:3900/api/user/register",
        values
      );
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (values: LoginProps) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.0.77:3900/api/user/login",
        values
      );
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

  const getUserByID = async () => {
    let idUser = loginData?.user?.id;
    const config = {
      headers: {
        Authorization: `${loginData?.token}`,
      },
    };
    try {
      const response = await axios(
        `http://192.168.0.77:3900/api/user/profile/${idUser}`,
        config
      );
      setDataUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
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
        getUserByID,
        dataUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
