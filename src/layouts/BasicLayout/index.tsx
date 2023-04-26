import { Outlet } from '@umijs/max';

import styles from './index.module.less';

export default function BasicLayout() {
  const cssVariableStyle: any = {
    '--screen-global-padding': `${PADDING}px`,
  };

  return (
    <div className={styles.screenWrapper} style={cssVariableStyle}>
      <div className={styles.background} />
      <Outlet />
    </div>
  );
}
