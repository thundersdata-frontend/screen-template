import { homepageUrls } from '@/constant';
import { fetchData } from '@/utils/fetchData';
import { useRequest } from 'ahooks';
import { memo, useContext, useEffect } from 'react';
import { HomepageContext } from '../../HomepageContext';

type LeftData = {
  name: string;
};

export default memo(() => {
  const path = useContext(HomepageContext);

  const { data, refresh } = useRequest(fetchData<LeftData>(homepageUrls.left));

  useEffect(() => {
    if (path === homepageUrls.left) {
      console.log('left');
      refresh();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return (
    <div>
      <div>left</div>
      <div>{data ? JSON.stringify(data) : ''}</div>
    </div>
  );
});
