import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactModalProvider } from './contexts/ContactModalContext';
import ContactModal from './components/ContactModal/ContactModal';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Pricing from './pages/Pricing/Pricing';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ContactModalProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planos" element={<Pricing />} />
        </Routes>
        <Footer />
        <ContactModal />
      </ContactModalProvider>
    </BrowserRouter>
  );
}

export default App;