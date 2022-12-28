import { Select, SelectProps } from 'antd';
import styles from './index.module.less';

export default (props: SelectProps) => {
  const { options = [], children, ...restProps } = props;
  return (
    <div className={styles.selectWrap}>
      <Select
        getPopupContainer={trigger => trigger?.parentElement}
        style={{ width: 160 }}
        dropdownClassName="custom-select-dropdown"
        {...restProps}
      >
        {children
          ? children
          : options.map(item => {
              return (
                <Select.Option value={item.value} key={item.value}>
                  {item.label}
                </Select.Option>
              );
            })}
      </Select>
    </div>
  );
};
