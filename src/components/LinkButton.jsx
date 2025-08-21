import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MoveButton = styled.button`
  width: 10rem;
  height: 5rem;
  background-color: grey;
  color: white;
  font-size: 1.5rem;
  border-radius: 15px;
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
