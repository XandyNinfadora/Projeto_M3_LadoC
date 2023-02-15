import { motion } from 'framer-motion';
import styles from './Filmes.css';

function Filmes() {
    return (
        <motion.div className='case'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <main>

                <section >
                    <div id='casa'>
                        <div class="container">

                            <div class="card card-1">

                                <div class="card-header">
                                    <img src="https://br.web.img3.acsta.net/pictures/18/06/26/21/10/0013923.jpg" class="card-img" />
                                </div>

                                <div className="card-body">
                                    <h3 className="card-local">Sala X</h3>
                                    <h2 className="card-titulo">Infiltrados na Klan</h2>
                                    <h3 className="card-local"> Sinopse</h3>
                                    <p className="card-texto">Dirigido por Spike Lee. Um policial afro americano de Colorado, consegue infiltrar-se com sucesso na filial local da Ku Klux Klan com a ajuda de um judeu que eventualmente se torna seu líder. Baseado em eventos reais.
                                    </p>
                                    <h3 className="card-local"> 2 h 15 min - Biografia</h3>
                                </div>




                            </div>

                            <div class="card card-2">

                                <div class="card-header">
                                    <img src="https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg" class="card-img" />
                                </div>

                                <div class="card-body">
                                    <h3 class="card-local">Sala X</h3>
                                    <h2 class="card-titulo">Us</h2>
                                    <h3 className="card-local"> Sinopse</h3>
                                    <p class="card-texto">Dirigido por Jordan Peele. As serenas férias de praia de uma família transformam-se em caos quando os seus duplos aparecem e começam a aterrorizá-los.
                                    </p>
                                    <h3 className="card-local"> 1 h 56 min - Terror</h3>
                                </div>



                            </div>



                            <div class="card card-3">

                                <div class="card-header">
                                    <img src="https://br.web.img3.acsta.net/pictures/17/04/19/21/08/577190.jpg" class="card-img" />
                                </div>

                                <div class="card-body">
                                    <h3 class="card-local">Sala X</h3>
                                    <h2 class="card-titulo">Corra!</h2>
                                    <h3 className="card-local"> Sinopse</h3>
                                    <p class="card-texto">Um jovem afro americano visita os pais de sua namorada branca durante o fim de semana, onde a percepção deles sobre ele não e ótima, mas com o tempo, Chris percebe que a família esconde algo muito mais perturbador.
                                    </p>
                                    <h3 className="card-local"> 1 h 44 min - Mistério/Terror</h3>

                                </div>



                            </div>

                        </div>
                        <div class="container">

                            <div class="card card-1">

                                <div class="card-header">
                                    <img src="https://s3.amazonaws.com/criterion-production/films/ca85ecb577805f4fadc08fd3da4b63c7/Wqg5GzMifNY4it5vtWI92trdtpqW8I_large.jpg" class="card-img" />
                                </div>

                                <div className="card-body">
                                    <h3 className="card-local">Sala X</h3>
                                    <h2 className="card-titulo">Malcolm X</h2>
                                    <h3 className="card-local"> Sinopse</h3>
                                    <p className="card-texto">Dirigido por Spike Lee. Épico biográfico do controverso e influente líder nacionalista negro, desde o início de sua carreira e carreira de gângster, até seu ministério como membro da nação do Islã.

                                    </p>
                                    <h3 className="card-local"> 3 h 22 min - Biografia</h3>

                                </div>




                            </div>

                            <div class="card card-2">

                                <div class="card-header">
                                    <img src="https://br.web.img2.acsta.net/r_1280_720/medias/nmedia/18/93/98/94/20293291.jpg" class="card-img" />
                                </div>

                                <div class="card-body">
                                    <h3 class="card-local">Sala X</h3>
                                    <h2 class="card-titulo">Halloween - A Noite do Terror</h2>
                                    <h3 className="card-local"> Sinopse</h3>
                                    <p class="card-texto">Quinze anos depois de assassinar sua irmã na noite de Halloween em 1963, Michael Myers escapa do hospício e retorna para a pequena cidade de Haddonfield para matar novamente.



                                    </p>
                                    <h3 className="card-local">1 h 31 min - Terror</h3>
                                </div>



                            </div>



                            <div class="card card-3">

                                <div class="card-header">
                                    <img src="https://img.elo7.com.br/product/zoom/268B8AC/big-poster-filme-panico-1996-lo02-tamanho-90x60-cm-poster-de-filme.jpg" class="card-img" />
                                </div>

                                <div class="card-body">
                                    <h3 class="card-local">Sala X</h3>
                                    <h2 class="card-titulo">Pânico</h2>
                                    <h3 className="card-local"> Sinopse</h3>
                                    <p class="card-texto">Dirigido por Wes Craven. Um filme de terror em que uma adolescente é aterrorizada por um assassino um ano depois de sua mãe ter sido assassinada.
                                    </p>
                                    <h3 className="card-local">1 h 51 min - Terror</h3>
                                </div>



                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </motion.div>
    )
}
export default Filmes;