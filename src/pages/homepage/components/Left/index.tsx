import { memo, useContext } from 'react';
import { HomepageContext } from '../HomepageContext';

export default memo(() => {
  const data = useContext(HomepageContext);
  console.log(data?.left);
  return (
    <div>
      <div>left</div>
      {data?.left?.data?.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});
