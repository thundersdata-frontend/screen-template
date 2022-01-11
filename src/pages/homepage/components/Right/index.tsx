import { memo, useContext } from 'react';
import { HomepageContext } from '../HomepageContext';

export default memo(() => {
  const data = useContext(HomepageContext);
  console.log(data.right);
  return (
    <div>
      <div>right</div>
      <div>{data?.right?.data?.type}</div>
    </div>
  );
});
