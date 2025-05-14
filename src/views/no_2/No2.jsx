import { React } from 'react';
import LinkButton from '../../components/LinkButton';
import No2useState from './No2useState';

const No2 = () => {
  return (
    <>
      <div className="no2_header">
        <div className="no2_title">
          <h2>두 번째 기능입니다</h2>
          <LinkButton to="/">홈으로 가기</LinkButton>
        </div>
        <h3>리액트로 다양한 방법으로 토글 기능을 만들어 보자.</h3>
        <hr />
      </div>
      <div className="no2_main">
        <div className="toggle1">
          <p>1. useState를 사용하여 토글 기능 만들기</p>
          <No2useState />
        </div>
        <hr />
        <div className="toggle2">
          <p>2. useReducer를 사용하여 토글 기능 만들기</p>
        </div>
        <hr />
        <div className="toggle3">
          <p>3. useToggle 커스텀 훅을 사용하여 토글 기능 만들기</p>
        </div>
      </div>
    </>
  );
};

export default No2;
