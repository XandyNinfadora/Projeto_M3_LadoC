import { motion } from 'framer-motion';
import styles from './Sugestoes.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogFetch from '../configAxios';
import NewPost from './NewPost';

/* Separei em duas partes, toda linha de código aqui é pertinente ao tratamento dos comentários vindo do jsonserver e fazer sua requisição */

function Sugestoes() {
    /* fazendo requisição do json server para mostrar na página*/
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
            const response = await blogFetch.get("/sugestao");
            const data = response.data;

            setPosts(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts()

    }, []);

    return (
        <motion.div className={styles.sugestoesPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <div className={styles.sugestoesDiv}>
                <h1> Sugestões dos nossos clientes</h1> {posts.length === 0 ? <p id={styles.carregamentoMensagem}> Carregando as informações, um momentinho!</p> : (posts.map((post) => (
                    <div className={styles.sugestoesPost} key={post.id}>
                        <h2>{post.nome_cliente}</h2>
                        <p>{post.comentario_cliente}</p>
                        <Link to={`/posts/${post.id}`} className={styles.sugestoesBtn}> Ler mais...</Link>
                    </div>
                )))};
                <NewPost></NewPost>
            </div>
        </motion.div>
    )
}
export default Sugestoes;