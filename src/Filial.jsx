import styles from './Filial.css'
import BanguShopping from "../../../public/filial/bangushopping.jpg"
import JardimGuadalupe from "../../../public/filial/jardimguadalupe.jpg"
import ViaBrasil from "../../../public/filial/viabrasil.jpg"
import WestShopping from "../../../public/filial/westshopping.jpg"

function Filial () {
    return (
        <div id="body">
              <div class="cardFilial">
                  <div class="textoFilial">
                    <h1 class="nomeFilial">West Shopping</h1>
                    <p class="enderecoFilial">Estr. do Mendanha, 555 - Campo Grande, Rio de Janeiro - RJ, 23087-283</p>
                  </div>
                  <div class="divImg">
                    <img class="imgFilial" src={WestShopping} alt="" />
                  </div>
              </div>

              <div class="cardFilial">
                  <div class="textoFilial">
                    <h1 class="nomeFilial">Bangu Shopping</h1>
                    <p class="enderecoFilial">R. Fonseca, 240 - Bangu, Rio de Janeiro - RJ, 21820-005</p>
                  </div>
                  <div class="divImg">
                    <img class="imgFilial" src={BanguShopping} alt="" />
                  </div>
              </div>

              <div class="cardFilial">
                  <div class="textoFilial">
                    <h1 class="nomeFilial">Jardim Guadalupe</h1>
                    <p class="enderecoFilial">Av. Brasil, 22155 - Guadalupe, Rio de Janeiro - RJ, 21670-000</p>
                  </div>
                  <div class="divImg">
                    <img class="imgFilial" src={JardimGuadalupe} alt="" />
                  </div>
              </div>

              <div class="cardFilial">
                  <div class="textoFilial">
                    <h1 class="nomeFilial">Shopping Via Brasil</h1>
                    <p class="enderecoFilial">R. Itapera, 500 - Irajá, Rio de Janeiro - RJ, 21230-500</p>
                  </div>
                  <div class="divImg">
                    <img class="imgFilial" src={ViaBrasil} alt="" />
                  </div>
              </div>

        </div>
    )
    }
    export default Filial;