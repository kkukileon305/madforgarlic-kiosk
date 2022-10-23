import { AiOutlineStar, AiOutlineWifi } from 'react-icons/ai';
import { BsCompass } from 'react-icons/bs';
import { BiDrink, BiMenu, BiWine } from 'react-icons/bi';
import { RiCoupon3Line } from 'react-icons/ri';
import { GiPresent, GiSteak } from 'react-icons/gi';
import { CiPizza } from 'react-icons/ci';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconType } from 'react-icons';
import { useRouter } from 'next/router';
import useResize from '../hooks/useResize';

const categories: { Icon: IconType; title: string; url: string }[] = [
  {
    Icon: AiOutlineStar,
    title: '프로모션',
    url: 'promotion',
  },
  {
    Icon: AiOutlineWifi,
    title: '신메뉴',
    url: 'new',
  },
  {
    Icon: RiCoupon3Line,
    title: '멤버십 쿠폰',
    url: 'coupon',
  },
  {
    Icon: GiPresent,
    title: '스마트 콘',
    url: 'con',
  },
  {
    Icon: GiSteak,
    title: '스테이크',
    url: 'steak',
  },
  {
    Icon: BsCompass,
    title: '파스타',
    url: 'pasta',
  },
  {
    Icon: CiPizza,
    title: '피자',
    url: 'pizza',
  },
  {
    Icon: BiWine,
    title: '와인',
    url: 'wine',
  },
  {
    Icon: BiDrink,
    title: '음료',
    url: 'drinks',
  },
];

const Aside = () => {
  const { push, asPath } = useRouter();
  const height = useResize().innerHeight;

  return (
    <AsideContainer>
      <h2 onClick={() => push('/')}>MadForGarlic</h2>
      <StyledSwiper
        //
        direction='vertical'
        slidesPerView={height > 900 ? 6 : 4}
        spaceBetween={20}
        $activeNumber={categories.findIndex(category => `/category/${category.url}` === asPath) + 1}
      >
        {categories.map(category => (
          <SwiperSlide //
            key={category.title}
            onClick={() => push(`/category/${category.url}`)}
          >
            <category.Icon size={40} />
            <h2>{category.title}</h2>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <RedMenu>
        <button>
          <BiMenu size={40} />
        </button>
        <button>호출</button>
      </RedMenu>
    </AsideContainer>
  );
};

const AsideContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #222222;
  width: 120px;
  height: 100%;
  color: white;
  font-weight: bold;

  & > h2 {
    padding: 10px;
    margin-bottom: 40px;
  }
`;

const StyledSwiper = styled(Swiper)<{ $activeNumber: number }>`
  height: calc(100% - 276px);
  padding-bottom: 60px;
  position: relative;
  z-index: 2;

  & > div {
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: #555555;
      transition: 0.3s;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background-color: #222222;
        transition: 0.3s;
      }

      &:nth-child(${({ $activeNumber }) => $activeNumber}) {
        color: white;

        &::before {
          background-color: white;
        }
      }
    }
  }
`;

const RedMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  padding: 10px;
  background-color: #222222;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    left: 0;
    bottom: 100%;
    position: absolute;
    width: 100%;
    height: 60px;
    background: linear-gradient(180deg, rgba(34, 34, 34, 0) 0%, rgba(34, 34, 34, 1) 100%);
  }

  button {
    border: 2px solid white;
    background-color: transparent;
    color: white;
    height: 80px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;

    &:last-of-type {
      border: 2px solid #c04040;
      background-color: #c04040;
    }
  }
`;

export default Aside;
