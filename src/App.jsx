import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link, useRoutes} from 'react-router-dom'
import Filmes from "./components/pages/Filmes";
import Filial from "./components/pages/Filial";
import Ingressos from "./components/pages/Ingressos";
import CompraOnline from "./components/pages/CompraOnline";
import Container from "./components/layout/Container";

function App() {


  return (
    <>
    <div className="linksIndex">
      <Link to="/filmes">Filmes</Link>
      <Link to="/filial">Filial</Link>
      <Link to="/ingressos">Ingressos</Link>
      <Link to="/compraonline">Compra Oline</Link>
    </div>
    <Container customClass="min-height">
    <Routes>
      <Route path="/filmes" element={<Filmes/>}/>
      <Route path="/filial" element={<Filial/>}/> 
      <Route path="/ingressos" element={<Ingressos/>}/>
      <Route path="/compraonline" element={<CompraOnline/>}/>
    </Routes>
    </Container>
    <p>Footer</p>
    </>
  )
}

export default App
