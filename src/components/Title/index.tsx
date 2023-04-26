import { PropsWithChildren } from 'react';

import styles from './index.module.less';

export default ({ children }: PropsWithChildren<{}>) => {
  return <div className={styles.title}>{children}</div>;
};
