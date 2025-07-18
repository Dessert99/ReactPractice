import { useState } from 'react';

const No2useState2 = () => {
  const [isOpen, setIsOpen] = useState(false); //처음에는 닫혀있어야 해서 false로 설정.
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          backgroundColor: 'gray',
          height: '60px',
          color: '#fff',
        }}
      >
        <h1>버튼을 클릭하시오!</h1>
        <button onClick={handleToggle}>{isOpen ? '닫기' : '열기'}</button>
      </div>
      {/*여기까지는 이전과 동일*/}

      <div
        style={{
          margin: '0px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'red',
          color: '#fff',

          //애니메이션을 부드럽게 만들어준다.
          transition: 'all 0.5s',
          padding: isOpen ? '10px' : '0px',

          // 추가한 css
          maxHeight: isOpen ? '200px' : '0px',
          overflow: 'hidden',

          opacity: isOpen ? '1' : '0',
          transform: isOpen ? 'translateY(0)' : 'translateY(-30px)',
        }}
      >
        <h1>{isOpen ? '부드러운 토글입니다!' : ''}</h1>
      </div>
    </>
  );
};

export default No2useState2;
