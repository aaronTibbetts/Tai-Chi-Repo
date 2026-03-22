'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AUTH_STORAGE_KEYS } from '@/lib/auth-storage';

interface AuthContextValue {
  isAuthenticated: boolean;
  setAuthenticated: (v: boolean) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      const flag = localStorage.getItem(AUTH_STORAGE_KEYS.loggedIn);
      setIsAuthenticated(flag === 'true');
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  const setAuthenticated = (v: boolean) => {
    setIsAuthenticated(v);
    try {
      if (v) localStorage.setItem(AUTH_STORAGE_KEYS.loggedIn, 'true');
      else localStorage.removeItem(AUTH_STORAGE_KEYS.loggedIn);
    } catch {
      /* ignore */
    }
  };

  const logout = async () => {
    setAuthenticated(false);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
