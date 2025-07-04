import React from 'react';

import styles from './index.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
