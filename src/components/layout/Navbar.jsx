import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css'
import logoCinema from '../../public/logoLadoC.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/"> <img src={logoCinema} id={styles.logoCinema} />
        </Link>
        <ul className={styles.listNav}>
          <li className={styles.item}><Link to="/filmes">Filmes</Link></li>
          <li className={styles.item}><Link to="/filial">Filial</Link></li>
          <li className={styles.item}><Link to="/ingressos">Ingressos</Link></li>
          <li className={styles.item}><Link to="/sugestoes">Sugestões</Link></li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar;