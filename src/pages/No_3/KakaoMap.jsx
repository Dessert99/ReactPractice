import { useEffect } from 'react';
import styled from 'styled-components';

const Map = styled.div`
  width: 80%;
  height: 500px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const KakaoMap = () => {
  const loadMap = () => {
    window.kakao.maps.load(() => {
      const { kakao } = window;
      const container = document.getElementById('map'); //지도를 표시할 div
      const options = {
        center: new kakao.maps.LatLng(37.5961657, 127.0635885), // 지도의 중심 좌표
        level: 3, //지도 확대 레벨
      };
      const map = new kakao.maps.Map(container, options); // 지도 생성

      // 마커를 생성할 위치
      let markerPosition = new kakao.maps.LatLng(37.595869, 127.058712);

      // 마커 생성
      let marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    });
  };

  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_KEY}&autoload=false`;
      script.onload = loadMap;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      loadMap(); // SDK가 이미 로드돼 있어도 안전하게 loadMap 호출
    }
  }, []);

  return (
    <>
      <Container>
        <Map id="map" />
      </Container>
    </>
  );
};

export default KakaoMap;
