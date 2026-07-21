import styles from './styles.module.css';
import type { ReactNode } from 'react';

type GenericHtmlProps = {
  children: ReactNode;
};

export function GenericHtml({ children }: GenericHtmlProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
