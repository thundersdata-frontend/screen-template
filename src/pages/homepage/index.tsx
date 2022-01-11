import { useHomepageService } from './useHomepageService';

import styles from './index.module.less';
import Header from './components/Header';
import Left from './components/Left';
import Center from './components/Center';
import Right from './components/Right';
import { HomepageProvider } from './components/HomepageContext';

export default function IndexPage() {
  const { data } = useHomepageService();

  return (
    <HomepageProvider value={data}>
      <div className={styles.page}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.body}>
          <div className={styles.left}>
            <Left />
          </div>
          <div className={styles.center}>
            <Center />
          </div>
          <div className={styles.right}>
            <Right />
          </div>
        </div>
      </div>
    </HomepageProvider>
  );
}
