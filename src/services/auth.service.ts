import { AxiosError } from "axios";
import { tesloApi } from "../api/teslo.api";

export interface LoginResponse {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

export class AuthService {
  
  //? Login user with email and password
  static login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const { data } = await tesloApi.post<LoginResponse>("/auth/login", { email, password });
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }

      throw new Error("Something went wrong");
    }
  };

  //? Check if user is logged in or Token is valid
  static checkStatus = async (): Promise<LoginResponse> => {
    try {
      const { data } = await tesloApi.get<LoginResponse>("/auth/check-status");
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }

      throw new Error("Something went wrong");
    }
  };
}
