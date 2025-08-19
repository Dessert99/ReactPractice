import { BrowserRouter, Route, Routes } from 'react-router-dom';
//페이지
import MainPage from './pages/MainPage/MainPage';
import No1 from './pages/no_1/No1';
import No2 from './pages/no_2/No2';
import No3 from './pages/No_3/No3';
import No4 from './pages/No_4/No4';
import No5 from './pages/No_5/No5';

//헤더
import Header from './components/header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/No1" element={<No1 />} />
          <Route path="/No2" element={<No2 />} />
          <Route path="/No3" element={<No3 />} />
          <Route path="/No4" element={<No4 />} />
          <Route path="/No5" element={<No5 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
