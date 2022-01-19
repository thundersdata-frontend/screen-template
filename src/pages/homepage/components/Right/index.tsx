import { homepageUrls } from '@/constant';
import { fetchData } from '@/utils/fetchData';
import { useRequest } from 'ahooks';
import { memo, useContext, useEffect } from 'react';
import { HomepageContext } from '../../HomepageContext';

type RightData = {
  name: string;
};
export default memo(() => {
  const path = useContext(HomepageContext);
  const { data, refresh } = useRequest(fetchData<RightData>(homepageUrls.left));

  useEffect(() => {
    if (path === homepageUrls.right) {
      console.log('hello');
      refresh();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return (
    <div>
      <div>right</div>
      <div>{data ? JSON.stringify(data) : ''}</div>
    </div>
  );
});
