'use client';

import styles from './index.module.scss';
import { YEAR } from '@/constants';
import { useUser } from '@/store/auth';

export default function Footer() {
  const user = useUser();

  return (
    <footer className={styles.footer}>
      {YEAR} {user ? `Logged as ${user.email}` : ''}
    </footer>
  );
}
