import Layout from 'antd/lib/layout';
import { Outlet } from 'umi';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constant';
import 'antd/dist/antd.css';
import styles from './index.module.less';
import { useEffect, useState } from 'react';

export default function BasicLayout() {
  const [scale, setScale] = useState<number>();

  /** 对 echarts 图表进行反缩放，修复 zoom 以后 tooltip 偏移问题 */
  useEffect(() => {
    setTimeout(() => {
      const canvasDoms = document.getElementsByTagName('canvas');
      Array.from(canvasDoms).forEach((item: any) => {
        if (!item) return;
        item.style.zoom = `calc(1/${scale})`;
        item.style.transformOrigin = 'left top';
        item.style.transform = `scale(${scale})`;
      });
    }, 1000);
  }, [scale]);

  /** 对 dom 进行缩放 */
  const handelDomScale = (dom: any, scale?: number) => {
    if (!dom) return;
    dom.style.transform = 'translate(-50%)';
    dom.style.zoom = `${scale}`;
  };

  /** 大屏缩放自适应屏幕 */
  requestAnimationFrame(() => {
    function setScreenScale() {
      const newScale =
        document.documentElement.clientWidth / document.documentElement.clientHeight < SCREEN_WIDTH / SCREEN_HEIGHT
          ? document.documentElement.clientWidth / SCREEN_WIDTH
          : document.documentElement.clientHeight / SCREEN_HEIGHT;
      const screenDom = document.querySelector('#screen');
      setScale(newScale);
      handelDomScale(screenDom, newScale);
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
        ref={dom => handelDomScale(dom, scale)}
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
        id="screen"
      >
        <Outlet />
      </Layout>
    </div>
  );
}
