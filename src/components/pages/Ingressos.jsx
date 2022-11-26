import { motion } from 'framer-motion';
import styles from './Ingressos.css';

function Ingressos() {
  return (
    <motion.div className={styles.divPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} >
      <div id="body2">
        <div className="cardFilial">
          <div className="textoFilial2">
            <h1 className="nomeFilial2">Sexta, Sábado, Domingo e Feriados</h1>
            <p className="enderecoFilial2">Já estão no valor de R$ 12,99 a meia-entrada, e R$ 22,99 a inteira.</p>
          </div>


        </div>
        <div className="cardFilial">
          <div className="textoFilial2">
            <h1 className="nomeFilial2">Segunda, Terça, Quarta e Quinta</h1>
            <p className="enderecoFilial2"> Estão pelo preço promocional, R$ 9,99 a meia-entrada e a inteira por R$ 19,99!</p>
          </div>
        </div>
      </div>

    </motion.div>
  )
}
export default Ingressos;