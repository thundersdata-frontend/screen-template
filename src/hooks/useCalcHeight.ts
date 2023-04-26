import { useCallback, useEffect, useRef, useState } from 'react';

import { toInteger } from 'lodash-es';

export default function useCalcHeight() {
  const parentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [echartsHeight, setEchartsHeight] = useState(ECHARTS_DEFAULT_HEIGHT);

  const observer = new ResizeObserver(() => {
    const parentWidth = parentRef.current?.offsetWidth ?? 0;
    if (parentWidth <= BREAKPOINT && contentRef.current) {
      contentRef.current.style.removeProperty('height');
      setEchartsHeight(ECHARTS_DEFAULT_HEIGHT);
      return;
    }

    const parentHeight = parentRef.current?.offsetHeight ?? 0;
    const headerHeight = headerRef.current?.offsetHeight ?? 0;
    const availableHeight = parentHeight - headerHeight;
    if (contentRef.current) {
      contentRef.current.style.height = `${availableHeight}px`;
      const itemHeight = toInteger((availableHeight - PADDING) / ECHARTS_COUNT) - PADDING;
      setEchartsHeight(itemHeight);
    }
  });

  useEffect(() => {
    return () => {
      observer.disconnect();
    };
  }, []);

  const observe = useCallback(() => {
    observer.observe(parentRef.current!);
  }, []);

  return {
    parentRef,
    headerRef,
    contentRef,
    echartsHeight,
    observe,
  };
}
