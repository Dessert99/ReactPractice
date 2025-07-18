import { BrowserRouter, Route, Routes } from 'react-router-dom';
import No1 from './pages/no_1/No1';
import No2 from './pages/no_2/No2';
import No3 from './pages/No_3/No3';
import MainPage from './pages/MainPage/MainPage';
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
