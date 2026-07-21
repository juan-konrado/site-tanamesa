import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactModalProvider } from './contexts/ContactModalContext';
import ContactModal from './components/ContactModal/ContactModal';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Pricing from './pages/Pricing/Pricing';
import About from './pages/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ContactModalProvider>
        <ScrollToTop></ScrollToTop>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planos" element={<Pricing />} />
          <Route path="/quemsomos" element={<About />} />

        </Routes>
        <Footer />
        <ContactModal />
      </ContactModalProvider>
    </BrowserRouter>
  );
}

export default App;