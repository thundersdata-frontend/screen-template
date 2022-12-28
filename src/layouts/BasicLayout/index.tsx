import Layout from 'antd/lib/layout';
import { Outlet } from 'umi';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constant';
import 'antd/dist/antd.css';
import styles from './index.module.less';
import { useState } from 'react';

export default function BasicLayout() {
  const [scale, setScale] = useState<number>();
  /** 大屏缩放自适应屏幕 */
  requestAnimationFrame(() => {
    function setScreenScale() {
      const newScale =
        document.documentElement.clientWidth / document.documentElement.clientHeight < SCREEN_WIDTH / SCREEN_HEIGHT
          ? document.documentElement.clientWidth / SCREEN_WIDTH
          : document.documentElement.clientHeight / SCREEN_HEIGHT;
      const screenDom = document.querySelector('#screen') as HTMLElement;
      setScale(newScale);
      if (screenDom) {
        screenDom.style.transform = `scale(${newScale}) translate(-50%)`;
      }
    }
    setScreenScale();
    window.onresize = function () {
      setScreenScale();
    };
  });

  return (
    <div className={styles.screenWrapper}>
      <Layout
        className={styles.screen}
        ref={dom => {
          if (!dom) return;
          dom.style.transform = `scale(${scale}) translate(-50%)`;
        }}
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
        id="screen"
      >
        <Outlet />
      </Layout>
    </div>
  );
}
