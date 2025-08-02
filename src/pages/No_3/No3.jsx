import styled from 'styled-components';
import Kakao from './components/Kakao';
import { useState } from 'react';

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
  const [center, setCenter] = useState({ lat: 37.59607, lng: 127.058737 });
  const [level, setLevel] = useState(1);
  const [markers, setMarkers] = useState([]);
  const [path, setPath] = useState([]);

  return (
    <Container>
      <Title> 세 번째 기능 : 카카오맵 API</Title>
      <Kakao
        center={center}
        level={level}
        markers={markers}
        path={path}
        setCenter={setCenter}
        setMarkers={setMarkers}
        setPath={setPath}></Kakao>
    </Container>
  );
};

export default No3;
