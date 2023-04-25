import { FC } from 'react';

import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { RangePickerProps } from 'antd/lib/date-picker';
import classNames from 'classnames';

import styles from './index.module.less';

const { RangePicker } = DatePicker;

const CustomRangePicker: FC<RangePickerProps> = ({ className, ...props }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <RangePicker
        getPopupContainer={trigger => trigger.parentElement!}
        bordered={false}
        format="YYYY.MM.DD"
        placeholder={['开始时间', '结束时间']}
        locale={locale}
        {...props}
        dropdownClassName={styles.rangePicker}
      />
    </div>
  );
};

export default CustomRangePicker;
