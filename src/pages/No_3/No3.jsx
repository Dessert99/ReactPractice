import styled from 'styled-components';
import Kakao from './KakaoMap.jsx';

const Title = styled.h1`
  text-align: center;
`;

const No3 = () => {
  return (
    <>
      <Title>카카오맵 API</Title>
      <Kakao />
    </>
  );
};

export default No3;
