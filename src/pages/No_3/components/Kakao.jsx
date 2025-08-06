import { Map, MapMarker, Polyline, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import MapController from '../MapController';
import { useState } from 'react';

const StyledMap = styled(Map)`
  width: 90%;
  aspect-ratio: 3/2;
  border-radius: 20px;
`;

const Kakao = () => {
  const [center, setCenter] = useState({ lat: 37.591829, lng: 127.045189 });
  const [level, setLevel] = useState(1);
  const [markers, setMarkers] = useState([]);
  const [path, setPath] = useState([]);
  const [trail, setTrail] = useState([]);
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
      {markers.map((position, key) => (
        <MapMarker key={key} position={{ lat: position.lat, lng: position.lng }} />
      ))}
      <Polyline path={path} strokeWeight={5} strokeColor={'blue'} strokeStyle={'solid'} />
      <MapTypeControl position={'TOPRIGHT'} />
      <ZoomControl position={'RIGHT'} />
      <MapMarker position={center} />
      <MapController setCenter={setCenter} setMarkers={setMarkers} setPath={setPath} center={center} />
    </StyledMap>
  );
};

export default Kakao;
