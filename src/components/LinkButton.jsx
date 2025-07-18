import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MoveButton = styled.button`
  width: 100px;
  height: 50px;
`;

const LinkButton = ({ to, children }) => {
  return (
    <div>
      <Link to={to}>
        <MoveButton>{children}</MoveButton>
      </Link>
    </div>
  );
};

export default LinkButton;

/*
추후 확장성을 생각하면 ...rest를 넣으라는데 일단 패스
const LinkButton = ({ to, children, ...rest }) => {
  return (
    <Link to={to}>
      <button {...rest}>{children}</button>
    </Link>
  );
};
*/
