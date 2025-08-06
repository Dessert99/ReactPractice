import styled from 'styled-components';
import Kakao from './components/Kakao';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const Title = styled.h1`
  text-align: center;
`;

const No3 = () => {
  return (
    <Container>
      <Title> 세 번째 기능 : 카카오맵 API</Title>
      <Kakao />
    </Container>
  );
};

export default No3;
