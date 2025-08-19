import styled from 'styled-components';
import FileForm from './components/FileForm';
import Token from './components/Token';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  height: calc(100vh - 7rem);
`;
const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const No5 = () => {
  return (
    <Container>
      <Wrapper>
        <h1>파일 업로드</h1>
        <Token />
      </Wrapper>

      <FileForm />
    </Container>
  );
};

export default No5;
