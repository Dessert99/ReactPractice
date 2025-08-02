import { useMap } from 'react-kakao-maps-sdk';
import { useMemo } from 'react';

export default function ReSetttingMapBounds(props) {
  const map = useMap();
  const points = props.points;

  const bounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds();
    points.forEach((point) => {
      bounds.extend(new kakao.maps.LatLng(point.lat, point.lng));
    });
    return bounds;
  }, [points]);

  return (
    <p style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
      <button onClick={() => map.setBounds(bounds)}>지도 범위 재설정 하기</button>
    </p>
  );
}
