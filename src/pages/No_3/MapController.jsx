import { locationService, trailService } from './service/locationService';
import { useMap } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const Button = styled.button`
  width: 10rem;
  cursor: pointer;
`;
const ButtonPennel = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 5rem;
`;

const MapController = ({ setCenter, setMarkers, setPath, center }) => {
  // 지도 범위 조작을 위한 map 객체
  const map = useMap();

  //초기화
  const resetMap = () => {
    setCenter({ lat: 37.59607, lng: 127.058737 });
    setMarkers([]);
    setPath([]);
  };

  // 현재 위치로 이동
  const myPos = () => {
    const { geolocation } = navigator;
    const handleSuccess = (pos) => {
      const { latitude, longitude } = pos.coords;

      setCenter({
        'lat': latitude,
        'lng': longitude,
      });
      const data = { id: 1, name: '센터', lat: latitude, lng: longitude };
      setMarkers([data]);
    };

    const handleError = (error) => {
      console.error(error.message);
    };
    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  };

  //여러 개 마킹하기 : 외대~경희대
  const markingMap = async () => {
    try {
      const data = await locationService();
      setMarkers(data);
    } catch (e) {
      console.error(e);
    }
  };

  //산책로 길잇기 : 홍릉두물길
  const drawingTrail = async () => {
    try {
      const data = await trailService();
      let path = data[4].routes;
      setPath(path);

      const resetBounds = (path) => {
        let bounds = new window.kakao.maps.LatLngBounds();
        path.forEach((point) => {
          bounds.extend(new window.kakao.maps.LatLng(point.lat, point.lng));
        });
        return bounds;
      };

      const bounds = resetBounds(path);
      map.setBounds(bounds);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <ButtonPennel>
        <Button onClick={resetMap}>초기화</Button>
        <Button onClick={myPos}>현재 위치로 이동</Button>
        <Button onClick={markingMap}>한 번에 여러 개 마킹하기</Button>
        <Button onClick={drawingTrail}>산책로 그리기</Button>
      </ButtonPennel>
    </>
  );
};

export default MapController;
