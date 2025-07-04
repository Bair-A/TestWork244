'use client';

import styles from './index.module.scss';
import { useUser } from '@/store/auth';

export default function Footer() {
  const user = useUser();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {year} {user ? `Logged as ${user.email}` : ''}
    </footer>
  );
}
