import { ReactNode } from 'react';
import Globals from '../styles/Globals';
import Aside from './Aside';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Aside />
      <Globals />
      <main>{children}</main>
    </>
  );
};

export default Layout;
