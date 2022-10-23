import { useEffect, useState } from 'react';

const useResize = () => {
  const [size, setSize] = useState({
    innerWidth: 600,
    innerHeight: 900,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        innerWidth,
        innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

export default useResize;
