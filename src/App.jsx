import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link, useRoutes} from 'react-router-dom'
import Filmes from "./components/pages/Filmes";
import Filial from "./components/pages/Filial";
import Ingressos from "./components/pages/Ingressos";
import CompraOnline from "./components/pages/CompraOnline";
import Container from "./components/layout/Container";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
function App() {


  return (
    <>
    <Navbar/>
    <Container customClass="min-height">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/filmes" element={<Filmes/>}/>
      <Route path="/filial" element={<Filial/>}/> 
      <Route path="/ingressos" element={<Ingressos/>}/>
      <Route path="/compraonline" element={<CompraOnline/>}/>
    </Routes>
    </Container>
    <Footer/>
    </>
  )
}

export default App
