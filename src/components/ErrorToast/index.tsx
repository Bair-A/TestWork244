'use client';

import { useEffect, useState } from 'react';

import styles from './index.module.scss';

type ErrorToastProps = {
  message: string;
  onClose: () => void;
  visible: boolean;
};

const ErrorToast = ({ message, onClose, visible }: ErrorToastProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (visible) {
      setIsMounted(true);
      requestAnimationFrame(() => {
        setAnimateIn(true);
      });
    } else {
      setAnimateIn(false);
      const timeout = setTimeout(() => {
        setIsMounted(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [visible]);

  if (!isMounted) return null;

  return (
    <div
      className={`${styles.toast} ${animateIn ? styles.show : styles.hide}`}
      role='alert'
      onClick={onClose}
    >
      <span className={styles.icon}>⚠️</span>
      <div className={styles.message}>Error: {message}</div>
      <button
        aria-label='Close notification'
        className={styles.closeBtn}
        onClick={e => {
          e.stopPropagation();
          onClose();
        }}
      >
        ×
      </button>
    </div>
  );
};

export default ErrorToast;
