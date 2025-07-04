'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styles from './Header.module.scss';
import { useAuthStore } from '@/store/auth';
import { shallow } from 'zustand/shallow';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuthStore(
    state => ({
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      logout: state.logout
    }),
    shallow
  );

  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className={styles.header}>
      {!isAuthenticated ? (
        <Link className={styles.loginBtn} href='/login'>
          Login
        </Link>
      ) : (
        <div>
          {user && (
            <span>
              {user?.firstName} {user?.lastName}
            </span>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
