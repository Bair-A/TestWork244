'use client';

import styles from './index.module.scss';

const Loader = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner} aria-label='Loading...' />
    </div>
  );
};

export default Loader;
