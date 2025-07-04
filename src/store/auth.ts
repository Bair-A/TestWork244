import { AUTH_PATH } from '@/constants';
import axios from 'axios';
import { create } from 'zustand/react';

import { AuthState } from '@/shared/types';

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  isAuthenticated: false,
  login: async authCredentials => {
    console.log(authCredentials, 'АВТОРИЗАЦИЯ');
    try {
      const response = await axios.post(
        AUTH_PATH,
        {
          username: authCredentials.username,
          password: authCredentials.password,
          expiresInMins: 30
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      set({ user: response.data, isAuthenticated: true });
      console.log(response.data, 'ЛОГИН');
    } catch (error) {
      console.log(error, 'Ошибка авторизации в useAuthStore');
    }
  },
  logout: () => set({ user: null, isAuthenticated: false })
}));
