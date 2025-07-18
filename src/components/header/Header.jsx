import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background-color: #f8f9fa;
  padding: 16px 32px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeLink = styled.button`
  width: 200px;
  height: 50px;

  &:hover {
    border-radius: 12px;
    border: 3px solid rgba(110, 87, 255, 0);
    box-shadow: 6px 6px 20px 1px rgba(0, 0, 0, 0.17);
    transition: border-color 0.4s ease, transform 1s ease;
    transform-origin: center center;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Link to="/">
          <HomeLink>홈으로 이동하기</HomeLink>
        </Link>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
