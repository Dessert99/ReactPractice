import styled from 'styled-components';
import Kakao from './components/Kakao';
import { useState } from 'react';
import useMapController from './hooks/useMapController';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const Title = styled.h1`
  text-align: center;
`;
const Button = styled.button`
  width: 10rem;
  cursor: pointer;
`;
const ButtonPennel = styled.div`
  border: solid red;
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 5rem;
`;

const No3 = () => {
  const [center, setCenter] = useState({ lat: 37.59607, lng: 127.058737 });
  const [level, setLevel] = useState(1);
  const [markers, setMarkers] = useState([]);
  const [path, setPath] = useState([]);

  const { moveTo, markingMap, resetMap, drawingTrail } = useMapController({ setCenter, setMarkers, setPath });

  return (
    <Container>
      <Title> 세 번째 기능 : 카카오맵 API</Title>
      <Kakao center={center} level={level} markers={markers} path={path} />
      <ButtonPennel>
        <Button onClick={resetMap}>초기화</Button>
        <Button onClick={moveTo}>위치 이동하기</Button>
        <Button onClick={markingMap}>한 번에 여러 개 마킹하기</Button>
        <Button onClick={drawingTrail}>산책로 길잇기</Button>
      </ButtonPennel>
    </Container>
  );
};

export default No3;
