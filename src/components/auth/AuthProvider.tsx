'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  type AuthUser,
} from '@/lib/auth-api';

interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (fullName: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<AuthUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    void (async () => {
      const current = await getCurrentUser();
      setUser(current);
      setIsAuthenticated(!!current);
      setIsLoading(false);
    })();
  }, []);

  const refreshAuth = async () => {
    const current = await getCurrentUser();
    setUser(current);
    setIsAuthenticated(!!current);
  };

  const login = async (email: string, password: string) => {
    await loginUser({ email, password });
    const current = await getCurrentUser();
    if (!current) {
      setUser(null);
      setIsAuthenticated(false);
      throw new Error('Session cookie was not established. Use the same host for frontend and backend (localhost preferred).');
    }
    setUser(current);
    setIsAuthenticated(true);
  };

  const signup = async (fullName: string, email: string, password: string) => {
    await registerUser({ fullName, email, password });
    const current = await getCurrentUser();
    if (!current) {
      setUser(null);
      setIsAuthenticated(false);
      throw new Error('Session cookie was not established. Use the same host for frontend and backend (localhost preferred).');
    }
    setUser(current);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch {
      /* ignore */
    }
    setUser(null);
    setIsAuthenticated(false);
    router.push('/');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        login,
        signup,
        logout,
        refreshAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
