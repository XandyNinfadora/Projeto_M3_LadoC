import { motion } from 'framer-motion';
import styles from './Filial.css';
function Filial2() {
    return (
        <motion.div className={styles.divPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <h1>Filial GANHAMO</h1>
        </motion.div>

    )
}
export default Filial2;