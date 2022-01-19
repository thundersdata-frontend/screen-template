import { useEffect, useMemo } from 'react';
import { useWebSocket } from 'ahooks';
import { ReadyState } from 'ahooks/lib/useWebSocket';
import { WEBSOCKET_URL } from '@/constant';

export function useHomepageService() {
  const { readyState, sendMessage, latestMessage } = useWebSocket(
    WEBSOCKET_URL,
    {
      onOpen() {
        console.log('和服务端已建立连接');
      },
      onMessage(msg) {
        console.log('收到服务端推送数据： ', msg);
      },
      onClose() {
        console.log('和服务端断开连接');
      },
      onError(e) {
        console.error(e);
      },
    },
  );

  /** 建立连接后立刻发送Token到服务端进行身份认证 */
  useEffect(() => {
    if (readyState === ReadyState.Open) {
      sendMessage?.(JSON.stringify({ Token: '30001', Event: 'dataChange' }));
    }
  }, [readyState, sendMessage]);

  const path = useMemo(() => {
    try {
      if (latestMessage) {
        const { path } = JSON.parse(latestMessage.data);
        return path;
      }
    } catch (error) {
      console.error(error);
    }
  }, [latestMessage]);

  return {
    path,
  };
}
