import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import styles from './Footer.module.css';


function Footer() {
    return (
<footer className={styles.footer}>
            <hr/>
            <ul className={styles.socialList}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li> 
                    <FaTwitter/>
                </li>
            </ul>
            <p className={styles.copyRight}>
            &copy; 2022 - <span> Lado C </span>
            </p>
        </footer>
    )
}

export default Footer;