import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Category = () => {
  const {
    query: { category },
  } = useRouter();

  useEffect(() => {}, [category]);

  return (
    <div>
      <h2>{category}</h2>
    </div>
  );
};
export default Category;
