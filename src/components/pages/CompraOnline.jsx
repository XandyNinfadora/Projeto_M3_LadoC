import { motion } from 'framer-motion';
import styles from './CompraOnline.css';

function CompraOnline() {
    return (<motion.div className={styles.divPage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} >
        <h1>CompraOnline GANHAMO</h1>
    </motion.div>
    )
}
export default CompraOnline;