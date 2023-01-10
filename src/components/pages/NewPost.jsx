import styles from './NewPost.module.css';
import blogFetch from '../configAxios';
import { useState } from 'react';

/* Separei em duas partes, toda linha de código aqui é pertinente as requisições para deletar, editar e enviar o post para o jsonserver */

const NewPost = () => {
    /* postar a sugestão */
    const [Nome, setNome] = useState();
    const [Comentário, setComentário] = useState();
    const createPost = async (e) => {
        e.preventDefault();
        const post = { Nome, Comentário };
        await blogFetch.post("/sugestoes", post);

    }

    /* editar o post, ajeitar a gambiarra do rotaid ali que fiz para conseguir passar o id no requiremento */
    const [BodyRota, setBodyRota] = useState();
    const editaPost = async (e) => {
        e.preventDefault();
        const editaPost = { Nome, Comentário };
        const bodyRotaId = BodyRota;
        await blogFetch.put("/sugestoes/" + bodyRotaId, editaPost);

    }

    /* deletar o post, ajeitar o mesmo problema do anterior */

    const deletaPost = async (e) => {
        e.preventDefault();
        const bodyRotaId = BodyRota;
        await blogFetch.delete("/sugestoes/" + bodyRotaId);
    }
/* pertinente ao formulário com seus btns e campos.*/
    return <div className={styles.newPost}>
        <h2> Inserir novo post</h2>
        <form className={styles.formControl}>
            <div className={styles.formControlDiv}>
                <label htmlFor="Nome">Nome:</label>
                <input type="text" name="Nome" placeholder="Digite seu nome" id="nomeCaixa" onChange={(e) => setNome(e.target.value)}></input>
                <label htmlFor="Comentário">Comentário</label>
                <textarea name="Comentário" id={styles.comentario} placeholder="Fala pra gente sua sugestão!" onChange={(e) => setComentário(e.target.value)}></textarea>
                <button value="Criar Post" className={styles.newPostBtn} onClick={(e) => createPost(e)}>Enviar Post</button>
                <input type="number" name={styles.idBodyRota} id={styles.idBodyRota} placeholder="Lança o id do seu post!" onChange={(e) => setBodyRota(e.target.value)}></input>
                <button value="Atualiza Post" className={styles.newAttBtn} onClick={(e) => editaPost(e)}>Editar Post</button>
                <button value="Deleta Post" className={styles.newDeletBtn} onClick={(e) => deletaPost(e)}>Deleta Post</button>
            </div>

        </form>
    </div>
}

export default NewPost;