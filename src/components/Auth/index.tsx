'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import styles from './index.module.scss';
import ErrorToast from '@/components/ErrorToast';
import {
  useAuthErrorMessage,
  useClearError,
  useIsAuthError,
  useIsAuthenticated,
  useLogin,
  useLogout
} from '@/store/auth';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = useLogin();
  const router = useRouter();
  const errorMessage = useAuthErrorMessage();
  const isError = useIsAuthError();
  const clearError = useClearError();
  const isAuthenticated = useIsAuthenticated();
  const logout = useLogout();

  const handleLogin = async () => {
    await login({ username, password });
  };

  useEffect(() => {
    if (isError) setTimeout(clearError, 3500);
  }, [clearError, isError]);

  useEffect(() => {
    if (isAuthenticated) router.push('/');
  }, [isAuthenticated, router]);

  return (
    <div className={styles.wrapper}>
      {!isAuthenticated ? (
        <div className={styles.container}>
          <input
            className={styles.loginInput}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            className={styles.passwordInput}
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className={styles.loginButton} onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        <button className={styles.logoutButton} onClick={logout}>
          Logout
        </button>
      )}
      <ErrorToast
        message={errorMessage}
        onClose={clearError}
        visible={isError}
      />
    </div>
  );
};

export default Auth;
