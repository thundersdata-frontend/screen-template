import { Outlet } from '@umijs/max';

import styles from './index.module.less';

export default function BasicLayout() {
  return (
    <div className={styles.screenWrapper}>
      <div className={styles.background} />
      <Outlet />
    </div>
  );
}
