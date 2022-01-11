import { createContext } from 'react';

export const HomepageContext = createContext<Record<string, any>>({});

export const HomepageProvider = ({
  children,
  value,
}: {
  children?: React.ReactNode;
  value: Record<string, any>;
}) => {
  return (
    <HomepageContext.Provider value={value}>
      {children}
    </HomepageContext.Provider>
  );
};
