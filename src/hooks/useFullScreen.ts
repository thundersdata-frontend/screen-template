import { useEffect, useState } from 'react';

export default function useFullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const ele = document.fullscreenElement;
    if (ele) {
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
    }
  }, []);

  useEffect(() => {
    const handleChange = () => {
      setIsFullScreen(v => !v);
    };
    document.body.addEventListener('fullscreenchange', handleChange);

    return () => {
      document.body.removeEventListener('fullscreenchange', handleChange);
    };
  }, []);

  return {
    visible: document.fullscreenEnabled && isFullScreen,
  };
}
