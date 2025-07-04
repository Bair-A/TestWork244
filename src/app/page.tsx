import styles from './page.module.css';
import Auth from '@/components/Auth';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Auth />
      </main>
    </div>
  );
}
