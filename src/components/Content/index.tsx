import styles from './index.module.scss';

type ContentProps = { children: React.ReactNode };

const Content = ({ children }: ContentProps) => (
  <div className={styles.layout}>{children}</div>
);

export default Content;
