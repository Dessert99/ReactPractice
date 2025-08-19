import { instance } from './instance';

export const postToken = async () => {
  try {
    const info = {
      username: 'test',
      password: 'test1234!',
    };
    const { data } = await instance.post('/accounts/login/', info);
    const { access, refresh } = data;
    return { access, refresh };
  } catch (e) {
    console.error(e);
  }
};
