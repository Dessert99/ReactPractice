import LinkButton from '../../components/LinkButton';
import styled from 'styled-components';
const Container = styled.div`
  padding: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const MainPage = () => {
  return (
    <Container>
      <Wrapper>
        <LinkButton to="/No1">가로스크롤</LinkButton>
        <LinkButton to="/No2">토글</LinkButton>
        <LinkButton to="/No3">카카오맵</LinkButton>
        <LinkButton to="/No4">AI챗봇</LinkButton>
        <LinkButton to="/No5">파일 업로드</LinkButton>
      </Wrapper>
    </Container>
  );
};

export default MainPage;
