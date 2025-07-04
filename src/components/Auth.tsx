'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import styles from './Auth.module.scss';
import { useAuthStore } from '@/store/auth';

const Auth = () => {
  const login = useAuthStore(state => state.login);
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (username.length < 3 || password.length < 3) {
      setError('Минимум 3 символа в каждом поле');
      return;
    }
    try {
      login({
        username,
        password
      });
      router.push('/');
    } catch (err) {
      console.log(err, 'Ошибка авторизации');
      setError('Неверные данные для входа');
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Login</h1>
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Auth;
