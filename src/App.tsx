import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import Pricing from './pages/Pricing/Pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;