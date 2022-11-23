import { motion } from 'framer-motion';
import styles from './Filmes.css';

function Filmes() {
    return (
        <motion.div className={styles.divPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <h1>Filmes GANHAMO</h1>
        </motion.div>
    )
}
export default Filmes;