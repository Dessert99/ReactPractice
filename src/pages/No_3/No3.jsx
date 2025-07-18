import styled from 'styled-components';
import KakaoMap from './KakaoMap';

const Title = styled.h1`
  text-align: center;
`;

const No3 = () => {
  return (
    <>
      <Title>카카오맵 API</Title>
      <KakaoMap />
    </>
  );
};

export default No3;
