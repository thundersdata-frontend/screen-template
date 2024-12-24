import { Outlet } from '@umijs/max';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constant';
import { useScreenScale } from '@/hooks/useScreenScale';

import styles from './index.module.less';

export default function BasicLayout() {
  const { isReady, screenDomRef } = useScreenScale(SCREEN_WIDTH, SCREEN_HEIGHT);
  return (
    <div className={styles.screenWrapper}>
      <div className={styles.screen} ref={screenDomRef} style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
        <div className={styles.background} />
        {isReady && <Outlet />}
      </div>
    </div>
  );
}
