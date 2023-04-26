import CustomLayout from '@/components/CustomLayout';
import Title from '@/components/Title';
import { ScreenContext } from '@/context';
import useCalcHeight from '@/hooks/useCalcHeight';

import Left1 from './components/Left/Left1';
import Left2 from './components/Left/Left2';
import Left3 from './components/Left/Left3';
import Right1 from './components/Right/Right1';
import Right2 from './components/Right/Right2';
import Right3 from './components/Right/Right3';

export default () => {
  const { parentRef, headerRef, contentRef, echartsHeight, observe } = useCalcHeight();

  return (
    <ScreenContext.Provider value={echartsHeight}>
      <CustomLayout ref={parentRef}>
        <CustomLayout.Header ref={headerRef} bgUrl={require('../../assets/header-bg.png')} onLoad={observe}>
          <Title>雷数数据可视化大屏</Title>
        </CustomLayout.Header>
        <CustomLayout.Content ref={contentRef}>
          <CustomLayout.Left>
            <CustomLayout.Item>
              <Left1 />
            </CustomLayout.Item>
            <CustomLayout.Item>
              <Left2 />
            </CustomLayout.Item>
            <CustomLayout.Item>
              <Left3 />
            </CustomLayout.Item>
          </CustomLayout.Left>
          <CustomLayout.Center>center</CustomLayout.Center>
          <CustomLayout.Right>
            <CustomLayout.Item>
              <Right1 />
            </CustomLayout.Item>
            <CustomLayout.Item>
              <Right2 />
            </CustomLayout.Item>
            <CustomLayout.Item>
              <Right3 />
            </CustomLayout.Item>
          </CustomLayout.Right>
        </CustomLayout.Content>
      </CustomLayout>
    </ScreenContext.Provider>
  );
};
