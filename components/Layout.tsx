import { ReactNode } from 'react';
import Globals from '../styles/Globals';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Globals />
      <main>{children}</main>
    </>
  );
};
export default Layout;
