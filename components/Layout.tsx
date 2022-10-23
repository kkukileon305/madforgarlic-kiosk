import { ReactNode } from 'react';
import Aside from './Aside';
import CartBtn from './CartBtn';
import Cart from './Cart';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import useUiStore from '../store/useUiStore';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isCartOpen } = useUiStore();

  return (
    <>
      <Aside />
      {isCartOpen && <Cart />}
      <CartBtn />
      <main>{children}</main>
    </>
  );
};

export default Layout;
