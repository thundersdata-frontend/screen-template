import { createContext } from 'react';

export const HomepageContext = createContext<string | undefined>(undefined);

export const HomepageProvider = ({
  children,
  value,
}: {
  children?: React.ReactNode;
  value: string | undefined;
}) => {
  return (
    <HomepageContext.Provider value={value}>
      {children}
    </HomepageContext.Provider>
  );
};
