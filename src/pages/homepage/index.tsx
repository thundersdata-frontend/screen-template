import CustomLayout from '@/components/CustomLayout';
import Title from '@/components/Title';

import Center1 from './components/Center/Center1';
import Center2 from './components/Center/Center2';
import Left1 from './components/Left/Left1';
import Left2 from './components/Left/Left2';
import Left3 from './components/Left/Left3';
import Right1 from './components/Right/Right1';
import Right2 from './components/Right/Right2';
import Right3 from './components/Right/Right3';

export default () => {
  return (
    <>
      <CustomLayout>
        <CustomLayout.Header bgUrl={require('../../assets/header-bg.png')}>
          <Title>雷数数据可视化大屏</Title>
        </CustomLayout.Header>
        <CustomLayout.Content>
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
          <CustomLayout.Center>
            <Center1 />
            <Center2 />
          </CustomLayout.Center>
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
    </>
  );
};
