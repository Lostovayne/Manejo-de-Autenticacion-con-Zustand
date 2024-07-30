import type { AuthStatus, User } from "../../interfaces";
import { StateCreator, create } from "zustand";
import { AuthService } from "../../services/auth.service";
import { devtools, persist } from "zustand/middleware";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  //? Metodos Para el Auth
  loginUser: (email: string, password: string) => Promise<void>;
  checkAuthStatus: () => Promise<void>;
  logoutUser: () => void;
}

export const storeApi: StateCreator<AuthState> = (set) => ({
  status: "pending",
  token: undefined,
  user: undefined,

  loginUser: async (email: string, password: string) => {
    try {
      //? La logica se toma del servicio de auth
      const { token, ...user } = await AuthService.login(email, password);
      set({ status: "authorized", token, user });
    } catch (error) {
      set({ status: "unauthorized", token: undefined, user: undefined });
      throw "Credentials are not valid";
    }
  },

  checkAuthStatus: async () => {
    try {
      //? La logica se toma del servicio de auth
      const { token, ...user } = await AuthService.checkStatus();
      set({ status: "authorized", token, user });
    } catch (error) {
      set({ status: "unauthorized", token: undefined, user: undefined });
    }
  },

  logoutUser: () => {
    set({ status: "unauthorized", token: undefined, user: undefined });
  },
});

export const useAuthStore = create<AuthState>()(devtools(persist(storeApi, { name: "auth-storage" })));
