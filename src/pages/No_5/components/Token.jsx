import styled from 'styled-components';
import { postToken } from '../api/token';
import { setCookie, removeCookie } from '../api/cookie';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Button = styled.button`
  width: 7rem;
  height: 3rem;
  background-color: yellow;
  font-size: 1rem;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Token = () => {
  return (
    <Container>
      <Button
        onClick={async () => {
          const { access } = await postToken();
          setCookie('accessToken', access, { path: '/', secure: true });
        }}>
        토큰 발급
      </Button>
      <Button
        onClick={() => {
          removeCookie('accessToken');
        }}>
        토큰 버리기
      </Button>
    </Container>
  );
};

export default Token;
