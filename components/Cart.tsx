import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { useEffect } from 'react';
import useUiStore from '../store/useUiStore';

const Cart = () => {
  const { setIsCartOpen } = useUiStore();

  useEffect(() => {
    const handleClose = ({ target }: MouseEvent) => {
      if (!(target instanceof Element)) return;

      if ((!target.closest('div.container') || target.closest('.close')) && !target.closest('button.cart')) {
        setIsCartOpen(false);
      }
    };

    window.addEventListener('click', handleClose);

    return () => window.removeEventListener('click', handleClose);
  }, []);

  return (
    <Box>
      <div className='container'>
        <CloseBtn className='close' size={40} />
        <h2>카트</h2>
      </div>
    </Box>
  );
};

const Box = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #00000050;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;

  div.container {
    width: 60%;
    min-height: 400px;
    background: white;
    padding: 20px;
    position: relative;

    h2 {
      font-size: 40px;
      font-weight: bold;
    }
  }
`;

const CloseBtn = styled(GrClose)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export default Cart;
