import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const StyledMap = styled(Map)`
  width: 60%;
  aspect-ratio: 3/2;
  border-radius: 20px;
`;

const Kakao = ({ center, level, markers, path }) => {
  return (
    <StyledMap center={center} level={level}>
      {markers.map((position, key) => (
        <MapMarker key={key} position={{ lat: position.lat, lng: position.lng }} />
      ))}

      <Polyline path={[path]} strokeWeight={5} strokeColor={'blue'} strokeStyle={'solid'} />
    </StyledMap>
  );
};

export default Kakao;
