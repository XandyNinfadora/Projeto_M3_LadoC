import { motion } from 'framer-motion';
import styles from './Filmes.css';

function Filmes() {
    return (
        <motion.div className={styles.divPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <main>

                <section id="dsmovie-card-list" className="container">
                    <div id="row">

                        <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                            <div className="dsmovie-card">
                                <img src="https://br.web.img3.acsta.net/pictures/18/06/26/21/10/0013923.jpg"
                                    alt="Infiltrados na Klan" />
                                <div className="dsmovie-card-description">
                                    <h3>Infiltrados na Klan</h3>
                                    <p>Dirigido por Spike Lee. Um policial afro americano de Colorado, consegue infiltrar-se com sucesso na filial local da Ku Klux Klan com a ajuda de um judeu que eventualmente se torna seu líder. Baseado em eventos reais.</p>
                                    <div className="dsmovie-card-description-bottom">
                                        <h4>2 h 15 min - Biografia</h4>
                                        <h5>Sala x</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                            <div className="dsmovie-card">
                                <img src="https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg"
                                    alt="Us" />
                                <div className="dsmovie-card-description">
                                    <h3>Us</h3>
                                    <p>Dirigido por Jordan Peele. As serenas férias de praia de uma família transformam-se em caos quando os seus duplos aparecem e começam a aterrorizá-los.</p>
                                    <div className="dsmovie-card-description-bottom">
                                        <h4>1 h 56 min - Terror</h4>
                                        <h5>Sala x</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                            <div className="dsmovie-card">
                                <img src="https://br.web.img3.acsta.net/pictures/17/04/19/21/08/577190.jpg"
                                    alt="Corra!" />
                                <div className="dsmovie-card-description">
                                    <h3>Corra!</h3>
                                    <p>Dirigido por Jordan Peele. Um jovem afro americano visita os pais de sua namorada branca durante o fim de semana, onde a percepção deles sobre ele não e ótima, mas com o tempo, Chris percebe que a família esconde algo muito mais perturbador.</p>
                                    <div className="dsmovie-card-description-bottom">
                                        <h4>1 h 44 min - Mistério/Terror</h4>
                                        <h5>Sala x</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                            <div className="dsmovie-card">
                                <img src="https://s3.amazonaws.com/criterion-production/films/ca85ecb577805f4fadc08fd3da4b63c7/Wqg5GzMifNY4it5vtWI92trdtpqW8I_large.jpg"
                                    alt="Malcolm X" />
                                <div className="dsmovie-card-description">
                                    <h3>Malcolm X</h3>
                                    <p>Dirigido por Spike Lee. Épico biográfico do controverso e influente líder nacionalista negro, desde o início de sua carreira e carreira de gângster, até seu ministério como membro da nação do Islã.</p>
                                    <div className="dsmovie-card-description-bottom">
                                        <h4>3 h 22 min - Biografia</h4>
                                        <h5>Sala x</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                            <div className="dsmovie-card">
                                <img src="https://br.web.img2.acsta.net/r_1280_720/medias/nmedia/18/93/98/94/20293291.jpg"
                                    alt="Halloween - A Noite do Terror" />
                                <div className="dsmovie-card-description">
                                    <h3>Halloween - A Noite do Terror</h3>
                                    <p>Dirigido por John Carpenter. Quinze anos depois de assassinar sua irmã na noite de Halloween em 1963, Michael Myers escapa do hospício e retorna para a pequena cidade de Haddonfield para matar novamente.</p>
                                    <div className="dsmovie-card-description-bottom">
                                        <h4>1 h 31 min - Terror</h4>
                                        <h5>Sala x</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                            <div className="dsmovie-card">
                                <img src="https://m.media-amazon.com/images/I/81pylKBN6eL._AC_SL1500_.jpg"
                                    alt="O Enigma de Outro Mundo" />
                                <div className="dsmovie-card-description">
                                    <h3>O Enigma de Outro Mundo</h3>
                                    <p>Dirigido por John Carpenter. O filme conta a historia de um time de investigação na Antartica que é perseguido por extraterrestres</p>
                                    <div className="dsmovie-card-description-bottom">
                                        <h4>1 h 49 min - Ficção cientifica/Terror</h4>
                                        <h5>Sala x</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                            <div className="dsmovie-card">
                                <img src="https://img.elo7.com.br/product/zoom/268B8AC/big-poster-filme-panico-1996-lo02-tamanho-90x60-cm-poster-de-filme.jpg"
                                    alt="Pânico" />
                                <div className="dsmovie-card-description">
                                    <h3>Pânico</h3>
                                    <p>Dirigido por Wes Craven. Um filme de terror em que uma adolescente é aterrorizada por um assassino um ano depois de sua mãe ter sido assassinada.</p>
                                    <div className="dsmovie-card-description-bottom">
                                        <h4>1 h 51 min - Terror</h4>
                                        <h5>Sala x</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                            <div className="dsmovie-card">
                                <img src="https://br.web.img3.acsta.net/pictures/15/03/10/16/48/336112.jpg"
                                    alt="A Hora do Pesadelo" />
                                <div className="dsmovie-card-description">
                                    <h3>A Hora do Pesadelo</h3>
                                    <p>Dirigido por Wes Craven. Um filme de terror em que um assassino em série que mata suas vítimas durante seus sonhos.</p>
                                    <div className="dsmovie-card-description-bottom">
                                        <h4>1h 33 min - Terror</h4>
                                        <h5>Sala x</h5>
                                    </div>
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