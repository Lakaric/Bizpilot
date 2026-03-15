import { create } from "zustand";
import { authClient } from "@/lib/auth-client";

interface User {
  id: string;
  email: string;
  name: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  referralSource?: string | null;
  emailVerified: boolean;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  initAuth: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,

  initAuth: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data: session } = await authClient.getSession();
      if (session) {
        set({
          user: session.user as User,
          token: session.session?.token ?? null,
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    } catch {
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: "Failed to initialize auth",
      });
    }
  },

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const { error } = await authClient.signIn.email({ email, password });
      if (error) {
        set({ isLoading: false, error: error.message ?? "Login failed" });
        return;
      }
      const { data: session } = await authClient.getSession();
      set({
        user: (session?.user as User) ?? null,
        token: session?.session?.token ?? null,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch {
      set({ isLoading: false, error: "Login failed" });
    }
  },

  logout: async () => {
    try {
      await authClient.signOut();
    } finally {
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    }
  },
}));
