import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css'
import logo from '../../../public/iconClaquete.png'
function Navbar() {
  return (
    <nav>
      <Container>
        <Link to="/"> <img src={logo} id={styles.logoClaquete} />
        </Link>
        <ul>
          <li><Link to="/filmes">Filmes</Link></li>
          <li><Link to="/filial">Filial</Link></li>
          <li><Link to="/ingressos">Ingressos</Link></li>
          <li><Link to="/compraonline">Compra Oline</Link></li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar;