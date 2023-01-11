import { motion } from 'framer-motion';
import styles from './Ingressos.module.css';

/*refazer esse componente */

function Ingressos() {
  return (
    <motion.div className={styles.divPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} >
      <div className={styles.ingressoDiv}>
        <div className="cardFilia">
          <div className="textoFilial2">
            <h1 className={styles.cardIngressoTexto}>Sexta, Sábado, Domingo e Feriados</h1>
            <p className="enderecoFilial2">Já estão no valor de R$ 12,99 a meia-entrada, e R$ 22,99 a inteira.</p>
          </div>


        </div>
        <div className="cardFilial">
          <div className={styles.cardIngressoTexto}>
            <h1 className="casa">Segunda, Terça, Quarta e Quinta</h1>
            <p className="enderecoFilial2"> Estão pelo preço promocional, R$ 9,99 a meia-entrada e a inteira por R$ 19,99!</p>
          </div>
        </div>
      </div>

    </motion.div>
  )
}
export default Ingressos;