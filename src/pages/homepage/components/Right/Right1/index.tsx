import { useContext } from 'react';

import { BarLine } from '@td-design/lego';

import { ScreenContext } from '@/context';

export default () => {
  const echartsHeight = useContext(ScreenContext);

  return (
    <BarLine
      xAxisData={['03月', '04月']}
      yAxis={[{ name: '万元' }, { name: '%' }]}
      lineData={{ name: '同比增长率', data: [12, 11] }}
      barData={{ name: '运费', data: [500, 584] }}
      style={{ width: '100%', height: echartsHeight }}
    />
  );
};
