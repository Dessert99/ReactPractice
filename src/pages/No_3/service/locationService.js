import axios from 'axios';

export const locationService = async () => {
  const res = await axios.get('/kakaoLocation/location.json');
  return res.data;
};

export const trailService = async () => {
  const res = await axios.get('/kakaoLocation/walkroute.json');
  return res.data;
};
