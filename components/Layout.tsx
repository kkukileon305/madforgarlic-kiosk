import { ReactNode } from 'react';
import Globals from '../styles/Globals';
import Aside from './Aside';
import Cart from './Cart';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Aside />
      <Cart />
      <Globals />
      <main>{children}</main>
    </>
  );
};

export default Layout;
