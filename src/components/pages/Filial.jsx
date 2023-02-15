import BanguShopping from "../../../public/filial/bangushopping.jpg"
import JardimGuadalupe from "../../../public/filial/jardimguadalupe.jpg"
import ViaBrasil from "../../../public/filial/viabrasil.jpg"
import WestShopping from "../../../public/filial/westshopping.jpg"
import { motion } from 'framer-motion';
import styles from './Filial.css';

function Filial3() {
  return (
    <motion.div className={styles.divPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} >
      <div id="aDiv">
        <div className="body">
        <div className="cardFilial">
          <div className="textoFilial">
            <a className="aRef" href="https://westshopping.com.br/cinema.php">
              <h1 className="nomeFilial">West Shopping</h1>
            </a>
            <p className="enderecoFilial">Estr. do Mendanha, 555 - Campo Grande, Rio de Janeiro - RJ, 23087-283</p>
          </div>
          <div className="divImg">
            <img className="imgFilial" src={WestShopping} alt="" />
          </div>
        </div>

        <div className="cardFilial">
          <div className="textoFilial">
            <a className="aRef" href="https://bangushopping.com/lazer/cinema/">
              <h1 className="nomeFilial">Bangu Shopping</h1>
            </a>
            <p className="enderecoFilial">R. Fonseca, 240 - Bangu, Rio de Janeiro - RJ, 21820-005</p>
          </div>
          <div className="divImg">
            <img className="imgFilial" src={BanguShopping} alt="" />
          </div>
        </div>

        <div className="cardFilial">
          <div className="textoFilial">
            <a className="aRef" href="http://www.jardimguadalupeshopping.com.br/cinema.php">
              <h1 className="nomeFilial">Jardim Guadalupe</h1>
            </a>
            <p className="enderecoFilial">Av. Brasil, 22155 - Guadalupe, Rio de Janeiro - RJ, 21670-000</p>
          </div>
          <div className="divImg">
            <img className="imgFilial" src={JardimGuadalupe} alt="" />
          </div>
        </div>

        <div className="cardFilial">
          <div className="textoFilial">
            <a className="aRef" href="https://www.parqueshoppingsulacap.com.br/cinema">
              <h1 className="nomeFilial">Parque Shopping Sulacap</h1>
            </a>
            <p className="enderecoFilial">Av. Marechal Fontenele, 3545 - Jardim Sulacap, Rio de Janeiro - RJ, 21740-001</p>
          </div>
          <div className="divImg">
            <img className="imgFilial" src={ViaBrasil} alt="" />
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  )
}
export default Filial3;