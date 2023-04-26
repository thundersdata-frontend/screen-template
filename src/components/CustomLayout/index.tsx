import { forwardRef, PropsWithChildren } from 'react';

import useFullScreen from '@/hooks/useFullScreen';

import styles from './index.module.less';

const CustomLayout = forwardRef<HTMLDivElement, PropsWithChildren<{}>>(({ children }, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      {children}
    </div>
  );
});

const Header = forwardRef<HTMLDivElement, PropsWithChildren<{ bgUrl: string; onLoad?: () => void }>>(
  ({ children, bgUrl, onLoad }, ref) => {
    const { visible } = useFullScreen();

    return (
      <div id="header" className={styles.header} ref={ref}>
        <img src={bgUrl} className={styles.headerBg} onLoad={onLoad} />
        <div className={styles.headerText}>{children}</div>
        <div className={styles.headerIcon}>
          {!visible && (
            <img
              src={require('../../assets/fullscreen.png')}
              style={{
                width: 24,
                height: 24,
                cursor: 'pointer',
              }}
              onClick={() => document.body.requestFullscreen()}
            />
          )}
        </div>
      </div>
    );
  }
);

const Content = forwardRef<HTMLDivElement, PropsWithChildren<{}>>(({ children }, ref) => {
  return (
    <div id="content" ref={ref} className={styles.content}>
      {children}
    </div>
  );
});

const Left = ({ children }: PropsWithChildren<{}>) => {
  return <div className={styles.left}>{children}</div>;
};

const Center = ({ children }: PropsWithChildren<{}>) => {
  return <div className={styles.center}>{children}</div>;
};

const Right = ({ children }: PropsWithChildren<{}>) => {
  return <div className={styles.right}>{children}</div>;
};

const Item = ({ children }: PropsWithChildren<{}>) => {
  return <div className={styles.item}>{children}</div>;
};

export default Object.assign(CustomLayout, { Header, Content, Left, Center, Right, Item });
