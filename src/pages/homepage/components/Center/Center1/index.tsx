import DividerLineSvg from './DividerLineSvg';
import styles from './index.module.less';
import IndicatorBgSvg from './IndicatorBgSvg';

interface Indicator {
  label: string;
  value: string | number;
  unit?: string;
}
const data: Indicator[] = [
  { label: '数据展示', value: '148', unit: 'W' },
  { label: '数据展示', value: '148', unit: 'h' },
  { label: '数据展示', value: '148', unit: 'cm' },
  { label: '数据展示', value: '148', unit: 'Kg' },
  { label: '数据展示', value: '148', unit: 'M' },
];
export default () => {
  return (
    <div className={styles.container}>
      <IndicatorBgSvg />
      <div className={styles.content}>
        {data.map((item, index, arry) => (
          <IndicatorItem key={index} {...item} isLast={index === arry.length - 1} />
        ))}
      </div>
    </div>
  );
};

function IndicatorItem({ label, value, unit, isLast }: Indicator & { isLast: boolean }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <div className={styles.itemValue}>{value}</div>
        <div className={styles.itemLabel}>
          {label}
          {unit}
        </div>
      </div>
      {!isLast && <DividerLineSvg />}
    </div>
  );
}
