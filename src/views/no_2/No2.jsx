import { React } from 'react';
import LinkButton from '../../components/LinkButton';
import No2useState1 from './No2useState1';
import No2useState2 from './No2useState2';

const No2 = () => {
  return (
    <>
      <div className="no2_header">
        <div className="no2_title">
          <h2>두 번째 기능입니다</h2>
          <LinkButton to="/">홈으로 가기</LinkButton>
        </div>
        <h3>리액트로 토글 기능을 만들어 보자.</h3>
        <hr />
      </div>
      <div className="no2_main">
        <div className="toggle1">
          <No2useState1 />
          <No2useState2 />
        </div>
        <hr />
      </div>
    </>
  );
};

export default No2;
