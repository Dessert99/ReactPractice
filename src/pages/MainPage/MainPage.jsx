import LinkButton from '../../components/LinkButton';
import styled from 'styled-components';
const Wrap = styled.div`
  display: flex;
`;

const MainPage = () => {
  return (
    <>
      <Wrap>
        <LinkButton to="/No1">No1</LinkButton>
        <LinkButton to="/No2">No2</LinkButton>
        <LinkButton to="/No3">No3</LinkButton>
      </Wrap>
    </>
  );
};

export default MainPage;
