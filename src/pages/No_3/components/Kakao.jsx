import { Map, MapMarker, Polyline, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import MapController from '../MapController';

const StyledMap = styled(Map)`
  width: 60%;
  aspect-ratio: 3/2;
  border-radius: 20px;
`;

const Kakao = ({ center, level, markers, path, setCenter, setMarkers, setPath }) => {
  return (
    <StyledMap center={center} level={level}>
      {markers.map((position, key) => (
        <MapMarker key={key} position={{ lat: position.lat, lng: position.lng }} />
      ))}
      <Polyline path={path} strokeWeight={5} strokeColor={'blue'} strokeStyle={'solid'} />
      <MapTypeControl position={'TOPRIGHT'} />
      <ZoomControl position={'RIGHT'} />
      <MapController setCenter={setCenter} setMarkers={setMarkers} setPath={setPath} />
    </StyledMap>
  );
};

export default Kakao;
