import './styles/global.css';
// import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Header } from './components/Header/Header';
import { Solutions } from './components/Solutions/Solutions';
import Home from './pages/Home';

function App() {
  return (
    <>
      {/* <Header /> -> Lembre-se de adicionar a classe "glass-effect" no css do header */}
      <main>
     <Home></Home>
      </main>
    </>
  );
}

export default App;