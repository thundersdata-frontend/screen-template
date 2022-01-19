import { homepageUrls } from '@/constant';
import { memo, useContext, useEffect } from 'react';
import { HomepageContext } from '../../HomepageContext';

export default memo(() => {
  const path = useContext(HomepageContext);

  useEffect(() => {
    if (path === homepageUrls.right) {
      console.log('hello');
    }
  }, [path]);

  return (
    <div>
      <div>right</div>
    </div>
  );
});
