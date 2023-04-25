import { PropsWithChildren } from 'react';

import styles from './index.module.less';

const CustomLayout = ({ children }: PropsWithChildren<{}>) => {
  return <div className={styles.container}>{children}</div>;
};

const Left = ({ children }: PropsWithChildren<{}>) => {
  return <div className={styles.left}>{children}</div>;
};

const Center = ({ children }: PropsWithChildren<{}>) => {
  return <div className={styles.center}>{children}</div>;
};

const Right = ({ children }: PropsWithChildren<{}>) => {
  return <div className={styles.right}>{children}</div>;
};

export default Object.assign(CustomLayout, { Left, Center, Right });
