import Home from './views/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import No1 from './views/No1';
import No2 from './views/No2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/No1" element={<No1 />} />
          <Route path="/No2" element={<No2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
