import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useRoutes, useLocation } from 'react-router-dom'
import Filmes from "./components/pages/Filmes";
import Filial3 from "./components/pages/Filial";
import Ingressos from "./components/pages/Ingressos";
import Container from "./components/layout/Container";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import { AnimatePresence } from 'framer-motion';
import Sugestoes from './components/pages/Sugestoes';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Navbar />
      <Container customClass="min-height">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/filial" element={<Filial3 />} />
          <Route path="/ingressos" element={<Ingressos />} />
          <Route path="/sugestoes" element={<Sugestoes />} />
        </Routes>
      </Container>
      <Footer />
    </AnimatePresence>
  )
}

export default App
