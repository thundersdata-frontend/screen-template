/*
 * @文件描述: 大屏缩放自适应屏幕 hook
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2023-11-07 11:00:14
 * @LastEditors: 阮旭松
 * @LastEditTime: 2024-12-24 17:45:05
 */
import { useEffect, useRef, useState } from 'react';

export function useScreenScale(screenWidth: number, screenHeight: number) {
  const [scale, setScale] = useState<number>();
  const screenDomRef = useRef<HTMLDivElement | null>(null);

  /** 对 echarts 图表进行反缩放，修复 zoom 以后 tooltip 偏移问题 */
  useEffect(() => {
    const canvasDoms = document.getElementsByTagName('canvas');
    Array.from(canvasDoms).forEach((item: any) => {
      if (!item || item.id) return;
      item.style.zoom = `calc(1/${scale})`;
      item.style.transformOrigin = 'left top';
      item.style.transform = `scale(${scale})`;
    });
  }, [scale]);

  /** 对 dom 进行缩放 */
  const handelDomScale = (dom: HTMLElement | null, scale: number) => {
    if (!dom) return;
    dom.style.transform = 'translate(-50%)';
    dom.style.zoom = `${scale}`;
  };

  /** 设置缩放比例 */
  const setScreenScale = () => {
    const newScale =
      document.documentElement.clientWidth / document.documentElement.clientHeight < screenWidth / screenHeight
        ? document.documentElement.clientWidth / screenWidth
        : document.documentElement.clientHeight / screenHeight;
    setScale(newScale);
    if (screenDomRef.current) {
      handelDomScale(screenDomRef.current, newScale);
    }
  };

  /** 设置缩放比例 */
  useEffect(() => {
    setScreenScale(); // 初始化时调用一次

    // 监听屏幕宽度改变事件
    const resizeObserver = new ResizeObserver(setScreenScale);
    resizeObserver.observe(document.documentElement); // 观察 documentElement 的尺寸变化

    return () => {
      resizeObserver.disconnect(); // 清理 ResizeObserver
    };
  }, [screenWidth, screenHeight]);

  return { scale, screenDomRef };
}
