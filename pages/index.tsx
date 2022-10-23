import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <h2>home</h2>
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

export default Home;
