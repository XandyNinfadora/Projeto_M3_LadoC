import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.containerFooter}>
                <div className={styles.rowFooter}>
                    <div className={styles.footerCol}>
                        <h4>Sobre Nós</h4>
                        <ul>
                            <li> <Link to="/" className={styles.footerColLink}>Quem Somos</Link></li>
                            <li> <Link className={styles.footerColLink}>Nossa Missão</Link> </li>
                            <li> <Link className={styles.footerColLink}>Contato</Link> </li>
                            <li> <Link to="/filial" className={styles.footerColLink}>Filiais</Link> </li>
                            <li> <Link className={styles.footerColLink}>Nossos Parceiros</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerCol}>
                        <h4> Filmes </h4>
                        <ul>
                            <li> <Link className={styles.footerColLink}>Em Cartaz</Link></li>
                            <li> <Link className={styles.footerColLink}>Pré-Estréia</Link> </li>
                            <li> <Link className={styles.footerColLink}>Em Breve</Link></li>
                            <li> <Link className={styles.footerColLink}>Especial Terror 80'</Link> </li>
                            <li> <Link className={styles.footerColLink}>Eventos do mês</Link></li>
                        </ul>
                    </div>

                    <div className={styles.socialListDiv}>
                    <div className={styles.footerCol}>
                            <h4> Promoções? </h4>
                            <Link className={styles.footerColLinkDif}>Descontos? </Link>
                            <div className={styles.formSub}>
                                <form>
                                    <input type="email" placeholder='Digite seu e-amil e receba!' required />
                                    <button>Assinar</button>
                                </form>
                            </div>
                        </div>
                        <ul className={styles.socialList}>
                            <li>
                                <FaFacebook />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copyRightDiv}>
                <p className={styles.copyRight}>
                    &copy; 2022 - <span> Lado C </span> - Desenvolido pela AGC
                </p>
            </div>
        </footer>
    )
}

export default Footer;