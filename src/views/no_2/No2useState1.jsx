import { useState } from 'react';

const No2useState1 = () => {
  const [isOpen, setIsOpen] = useState(false); //처음에는 닫혀있어야 해서 false로 설정.

  //토글 함수
  const handleToggle = () => {
    setIsOpen(!isOpen); // on, off 기능
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', //버튼, 글씨 높이 조절됨. (flex랑 함께 써야 함.)
          padding: '10px',
          backgroundColor: 'gray',
          height: '60px',
          color: '#fff', //폰트 색 변경
        }}
      >
        <h1>버튼을 클릭하시오!</h1>
        <button onClick={handleToggle}>{isOpen ? '닫기' : '열기'}</button>
      </div>

      {isOpen && ( //조건부 렌더링
        <div
          style={{
            margin: '0px', // margin을 없애야 바로 밑에 생성된다.
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: 'red',
            height: '60px',
            color: '#fff', //폰트 색 변경
          }}
        >
          <h1>토글 연습 중입니다.</h1>
        </div>
      )}
      <br />
    </>
  );
};

export default No2useState1;
