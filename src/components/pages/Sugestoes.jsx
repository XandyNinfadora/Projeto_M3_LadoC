import { motion } from 'framer-motion';
import styles from './Sugestoes.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogFetch from '../configAxios';
import NewPost from './NewPost';


function Sugestoes() {
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
            const response = await blogFetch.get("/sugestoes");
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
        <motion.div className={styles.divPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <div className='homeDiv'>
                <h1> Sugestões dos nossos clientes</h1> {posts.length === 0 ? <p id="carrega"> Carregando as informações, um momentinho!</p> : (posts.map((post) => (
                    <div className='post' key={post.id}>
                        <h2>{post.Nome}</h2>
                        <p>{post.Comentário}</p>
                        <Link to={`/posts/${post.id}`} className="btn"> Ler mais...</Link>
                    </div>
                )))};
                <NewPost></NewPost>
            </div>
        </motion.div>
    )
}
export default Sugestoes;