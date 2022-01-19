import { homepageUrls } from '@/constant';
import { memo, useContext, useEffect } from 'react';
import { HomepageContext } from '../../HomepageContext';

export default memo(() => {
  const path = useContext(HomepageContext);

  useEffect(() => {
    if (path === homepageUrls.left) {
      console.log('left');
    }
  }, [path]);

  return (
    <div>
      <div>left</div>
    </div>
  );
});
