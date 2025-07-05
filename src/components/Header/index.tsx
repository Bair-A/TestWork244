'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styles from './index.module.scss';
import { useIsAuthenticated, useLogout, useUser } from '@/store/auth';

const Header = () => {
  const isAuthenticated = useIsAuthenticated();
  const user = useUser();
  const logout = useLogout();

  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href='/'>
        Logo
      </Link>
      {isAuthenticated ? (
        <div className={styles.logoutWrapper}>
          {user && (
            <span className={styles.userName}>
              {user?.firstName} {user?.lastName}
            </span>
          )}
          <button className={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <Link className={styles.login} href='/login'>
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
