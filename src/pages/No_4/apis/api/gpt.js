import { instance } from '../utils/axios';

export const openAi = async (prompt) => {
  const res = await instance.post('/chat/completions', prompt);
  return res.data;
};
