import LinkButton from '../../components/LinkButton';
import styled from 'styled-components';
const Wrap = styled.div`
  display: flex;
`;

const MainPage = () => {
  return (
    <>
      <Wrap>
        <LinkButton to="/No1">가로스크롤</LinkButton>
        <LinkButton to="/No2">토글</LinkButton>
        <LinkButton to="/No3">카카오맵</LinkButton>
        <LinkButton to="/No4">AI챗봇</LinkButton>
      </Wrap>
    </>
  );
};

export default MainPage;
