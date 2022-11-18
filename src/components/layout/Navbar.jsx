import {Link} from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css'
import logo from '../../../public/iconClaquete.png'
function Navbar () {
    return (
        <Container>
        <nav className="linksIndex">
        <Link to="/">
            <img src={logo} alt="" />
        </Link>
        <Link to="/filmes">Filmes</Link>
        <Link to="/filial">Filial</Link>
        <Link to="/ingressos">Ingressos</Link>
        <Link to="/compraonline">Compra Oline</Link>
      </nav>
      </Container>

    )
}

export default Navbar;