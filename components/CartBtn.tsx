import { BsCart } from 'react-icons/bs';
import styled from 'styled-components';
import useUiStore from '../store/useUiStore';

const CartBtn = () => {
  const { setIsCartOpen } = useUiStore();

  return (
    <FixedBtn className='cart' onClick={() => setIsCartOpen(true)}>
      <BsCart size={20} />
      <h3>MY ORDER</h3>
    </FixedBtn>
  );
};

const FixedBtn = styled.button`
  position: fixed;
  right: 0;
  top: 5%;
  border: none;
  background-color: #c04040;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  z-index: 10;

  h3 {
    font-weight: bold;
    font-size: 20px;
  }
`;

export default CartBtn;
