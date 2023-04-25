import CustomLayout from '@/components/CustomLayout';

import Left1 from './components/Left/Left1';
import Left2 from './components/Left/Left2';
import Left3 from './components/Left/Left3';

export default () => {
  return (
    <CustomLayout>
      <CustomLayout.Left>
        <Left1 />
        <Left2 />
        <Left3 />
      </CustomLayout.Left>
      <CustomLayout.Center>center</CustomLayout.Center>
      <CustomLayout.Right>right</CustomLayout.Right>
    </CustomLayout>
  );
};
