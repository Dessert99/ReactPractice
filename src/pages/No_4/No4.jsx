import styled from 'styled-components';
import Chatbot from './components/Chatbot';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  height: calc(100vh - 7rem);
`;

const No4 = () => {
  return (
    <Container>
      <h1>챗봇 구현하기</h1>
      <Chatbot />
    </Container>
  );
};

export default No4;
