import { useMemo, useRef } from 'react';
import { useUnmount, useWebSocket } from 'ahooks';

export function useHomepageService() {
  const data = useRef<Record<string, any>>({});

  const { readyState, latestMessage } = useWebSocket('ws://localhost:8080');

  data.current = useMemo(() => {
    if (latestMessage) {
      try {
        const { left, right } = JSON.parse(latestMessage.data);
        const { left: oldLeft } = data.current;

        console.log(oldLeft, left);
        return {
          left: {
            data: (oldLeft?.data ?? []).concat(left.data),
          },
          right,
        };
      } catch (error) {
        console.error(error);
      }
    }
    return data.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latestMessage, readyState]);

  useUnmount(() => {
    data.current = {};
  });

  return {
    data: data.current,
  };
}
