import { motion } from 'framer-motion';
import styles from './Home.css';

function Home() {
    return (
        <motion.div className={styles.divPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <h1> home tá funfando AAAAAAA clã</h1>
        </motion.div>

    )
}

export default Home;