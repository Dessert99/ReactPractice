import { locationService, trailService } from '../service/locationService';

const useMapController = ({ setCenter, setMarkers, setPath }) => {
  //초기화
  const resetMap = () => {
    setCenter({ lat: 37.59607, lng: 127.058737 });
    setMarkers([]);
  };

  //위치 이동하기 : 경희대
  const moveTo = () => {
    setCenter({ lat: 37.5944, lng: 127.0509 });
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

      let path = data[0].routes.map(({ lat, lng }) => ({ lat, lng }));
      setPath(path);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    moveTo,
    markingMap,
    resetMap,
    drawingTrail,
  };
};

export default useMapController;
