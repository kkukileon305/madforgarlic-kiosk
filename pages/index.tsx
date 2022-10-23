import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import useResize from '../hooks/useResize';

const Home = () => {
  const [imageList, setImageList] = useState<string[]>();
  const width = useResize().innerWidth;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<string[]>('/api/home');
      setImageList(data);
    })();
  }, []);

  return (
    <Container>
      <h2>Mad For Garlic</h2>

      <StyledH3>오늘의 이벤트</StyledH3>
      {imageList ? (
        <StyledSwiper //
          slidesPerView={width > 650 ? 2 : 1}
          spaceBetween={20}
          modules={[Navigation, Pagination, Scrollbar]}
          navigation={{
            nextEl: 'button.next',
            prevEl: 'button.prev',
          }}
          pagination={{
            el: 'div.bullets',
            clickable: true,
            renderBullet: (index, className) => `<span class=${className} >${index + 1}</span>`,
          }}
          scrollbar={{
            draggable: true,
            el: 'div.scroll',
          }}
        >
          {imageList.map(image => (
            <SwiperSlide key={image}>
              <Image src={image} alt='food' layout='responsive' objectFit='cover' width={6} height={4} />
              <h3>Title</h3>
              <p>some text...</p>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      ) : (
        <Skeleton>불러오는 중...</Skeleton>
      )}
      <StyledScroll className='scroll' />
      <StyledNavi>
        <button className='prev'>
          <BsArrowLeftShort size={30} />
        </button>
        <StyledBullet className='bullets' />
        <button className='next'>
          <BsArrowRightShort size={30} />
        </button>
      </StyledNavi>

      <StyledH3>오늘의 신메뉴</StyledH3>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;

  h2 {
    font-size: 40px;
    font-weight: bold;
  }
`;

const StyledH3 = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
`;

const StyledScroll = styled.div`
  margin-top: 20px;
  height: 4px;

  .swiper-scrollbar-drag {
    border-radius: 0;
    background-color: #dddddd;
  }
`;

const StyledNavi = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background-color: white;
    margin: 0;
    padding: 0;
    width: calc(100% / 7);
  }
`;

const StyledBullet = styled.div`
  max-width: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span.swiper-pagination-bullet {
    width: 25%;
    aspect-ratio: 1 / 1;
    border-radius: 4px;
    background-color: white;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #aaaaaa;

    &.swiper-pagination-bullet-active {
      background-color: #dddddd;
      color: #222222;
    }
  }
`;

const StyledSwiper = styled(Swiper)`
  margin-top: 20px;

  & > div {
    & > div {
      h3 {
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
      }

      p {
        margin-top: 4px;
      }

      img {
        -webkit-user-drag: none;
      }
    }
  }
`;

const Skeleton = styled.div``;

export default Home;
