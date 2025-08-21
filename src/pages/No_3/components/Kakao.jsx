import { Map, MapMarker, Polyline, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import MapController from '../MapController';
import { useState } from 'react';
import redIcon from '../assets/red.png';

const StyledMap = styled(Map)`
  width: 50%;
  height: 50%;
  aspect-ratio: 3/2;
  border-radius: 20px;
`;

const Kakao = () => {
  const [center, setCenter] = useState({ lat: 37.591829, lng: 127.045189 });
  const [level, setLevel] = useState(1);
  const [markers, setMarkers] = useState([]);
  const [path, setPath] = useState([]);
  const [trail, setTrail] = useState([]);

  // 좌표-> 주소 변환 핸들러
  const handleGeocoder = (lat, lng) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    let callback = (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const { road_address, address } = result[0];
        const addr = road_address?.address_name || address?.address_name; //도로명 우선
        console.log(addr);
      }
    };
    geocoder.coord2Address(lng, lat, callback);
  };

  return (
    <StyledMap
      center={center}
      level={level}
      onClick={(_, mouseEvent) => {
        const latlng = mouseEvent.latLng;
        const lat = latlng.getLat();
        const lng = latlng.getLng();
        if (window.confirm('추가?')) {
          setTrail((prev) => [...prev, { lat, lng }]);
          setMarkers((prev) => [...prev, { lat, lng }]);
        }
        console.log(trail);
      }}>
      {markers.map((pos, key) => {
        const { lat, lng } = pos;
        return (
          <MapMarker
            key={key}
            position={{ lat: lat, lng: lng }}
            clickable={true}
            onClick={() => handleGeocoder(lat, lng)}
            image={{
              src: redIcon,
              size: {
                width: 20,
                height: 20,
              },

              options: {
                offset: { x: 10, y: 10 }, // offset은 마커 이미지 안에서 “지도상의 좌표(lat, lng)”가 맞닿는 지점을 어디로 할지 지정한다.
              },
            }}
          />
        );
      })}
      <Polyline path={path} strokeWeight={5} strokeColor={'blue'} strokeStyle={'solid'} />
      <MapTypeControl position={'TOPRIGHT'} />
      <ZoomControl position={'RIGHT'} />
      <MapController setCenter={setCenter} setMarkers={setMarkers} setPath={setPath} center={center} />
    </StyledMap>
  );
};

export default Kakao;
