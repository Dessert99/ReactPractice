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
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      console.log(map);
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
