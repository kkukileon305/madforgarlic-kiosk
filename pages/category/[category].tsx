import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

const Category = () => {
  const category = useRouter().query.category as string | undefined;

  if (!category) {
    return (
      <CategoryContainer>
        <h2>로딩...</h2>
      </CategoryContainer>
    );
  }

  return (
    <CategoryContainer>
      <h2>
        {category.charAt(0).toLocaleUpperCase()}
        {category.slice(1)}
      </h2>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  padding: 20px;

  h2 {
    font-size: 40px;
    font-weight: bold;
  }
`;

export default Category;
