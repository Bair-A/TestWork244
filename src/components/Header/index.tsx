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
      <div className={styles.logo}>Logo</div>
      {!isAuthenticated ? (
        <Link className={styles.login} href='/login'>
          Login
        </Link>
      ) : (
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
      )}
    </header>
  );
};

export default Header;
