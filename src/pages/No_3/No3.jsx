import styled from 'styled-components';
import Kakao from './Kakao';

const Title = styled.h1`
  text-align: center;
`;

const No3 = () => {
  return (
    <>
      <Title> 세 번째 기능 : 카카오맵 API</Title>
      <Kakao />
    </>
  );
};

export default No3;
