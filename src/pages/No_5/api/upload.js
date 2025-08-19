import { instance } from './instance';

export const feeadbackUpload = async (formData) => {
  const { data } = await instance.post('/feedback/upload/', formData);
  return data;
};
