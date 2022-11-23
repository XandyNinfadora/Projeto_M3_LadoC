import { motion } from 'framer-motion';
import styles from './Sugestoes.css';

function Sugestoes() {
    return (
        <motion.div className={styles.divPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <h1>Sugestões ON CARALHOOOO GANHAMO</h1>
        </motion.div>
    )
}
export default Sugestoes;