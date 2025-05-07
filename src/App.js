import { BrowserRouter, Route, Routes } from 'react-router-dom';
import No1 from './views/no_1/No1';
import No2 from './views/No2';
import Home from './views/Home';

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
