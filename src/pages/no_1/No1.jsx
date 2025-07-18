import { useEffect, useRef } from 'react';
import './_no1.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cat1 from './img/cat1.jpg';
import cat2 from './img/cat2.jpg';
import cat3 from './img/cat3.jpg';
import cat4 from './img/cat4.jpg';
import cat5 from './img/cat5.png';
import cat6 from './img/cat6.jpeg';
import cat7 from './img/cat7.jpg';
import cat8 from './img/cat8.png';
import cat9 from './img/cat9.jpg';
import cat10 from './img/cat10.jpg';

//데이터 작업
const No1Text = [
  {
    num: '01',
    img: cat1,
  },
  {
    num: '02',
    img: cat2,
  },
  {
    num: '03',
    img: cat3,
  },
  {
    num: '04',
    img: cat4,
  },
  {
    num: '05',
    img: cat5,
  },
  {
    num: '06',
    img: cat6,
  },
  {
    num: '07',
    img: cat7,
  },
  {
    num: '08',
    img: cat8,
  },
  {
    num: '09',
    img: cat9,
  },
  {
    num: '10',
    img: cat10,
  },
];

const No1 = () => {
  // ref 설정
  const horizontalRef = useRef(null); // 전체 스크롤 감지 영역
  const sectionRef = useRef([]); // 각 카드(article) 저장 배열

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionRef.current;

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: horizontal,
        start: 'top top',
        end: () => '+=' + horizontal.scrollWidth,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => scrollTween.kill();
  }, []);

  return (
    <>
      <div className="no1_inner">
        <div className="no1_title">
          <h1>첫 번째 기능 : 가로 스크롤 </h1>
        </div>
        <div className="no1_wrap" ref={horizontalRef}>
          {No1Text.map((obj, key) => (
            <article className="no1_item" key={key} ref={(x) => (sectionRef.current[key] = x)}>
              <span className="num">{obj.num}</span>
              <img src={obj.img} alt="고양이" />
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default No1;
