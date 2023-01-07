import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import fotoHome from '../../../public/fotoCinemaHome.png';

function Home() {
    return (
        <motion.div className={styles.divPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <div className={styles.homeDiv}>
                <Link to="/filmes"><img id="fotoHome" src={fotoHome} /></Link>
                <div className='homeDiv'>
                    <h1> Sobre Nós</h1>
                    <p className='sobre' id='sobreHome'>  Somos uma empresa familiar que pensamos na proposta de trazer filmes antigos e clássicos de volta as telonas. Existe uma demanda grande do mercado por cinemas que repetem filmes recentes ou mesmo antigos, e é exatamente esse público que visamos. Trazendo filmes premiados e um catálogo diferente em cada mês, além dos nossos eventos mensais e semestrais. Venha participar dessa aventura espetacular em rever filmes incríveis e experiências nostálgicas!
                    </p>
                </div>
            </div>

        </motion.div>

    )
}

export default Home;