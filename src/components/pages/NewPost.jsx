import styles from './NewPost.css';
import { useNavigate } from 'react-router-dom';
import blogFetch from '../configAxios';
import { useState } from 'react';

const NewPost = () => {
    const navigate = useNavigate();
    const [Nome, setNome] = useState();
    const [Comentário, setComentário] = useState();
    const createPost = async (e) => {
        e.preventDefault();
        const post = { Nome, Comentário };
        await blogFetch.post("/sugestoes", post);

    }
    const [BodyRota, setBodyRota] = useState();
    const editaPost = async (e) => {
        e.preventDefault();
        const editaPost = { Nome, Comentário };
        const bodyRotaId = BodyRota;
        await blogFetch.put("/sugestoes/" + bodyRotaId, editaPost);

    }

    const deletaPost = async (e) => {
        e.preventDefault();
        const bodyRotaId = BodyRota;
        await blogFetch.delete("/sugestoes/" + bodyRotaId);
    }
    return <div className="newPost">
        <h2> Inserir novo post</h2>
        <form>
            <div className="formControl">
                <label htmlFor="Nome">Nome:</label>
                <input type="text" name="Nome" placeholder="Digite seu nome" id="nomeCaixa" onChange={(e) => setNome(e.target.value)}></input>
                <label htmlFor="Comentário">Comentário</label>
                <textarea name="Comentário" id="Comentário" placeholder="Fala pra gente sua sugestão!" onChange={(e) => setComentário(e.target.value)}></textarea>
                <button value="Criar Post" className='butao' onClick={(e) => createPost(e)}>Enviar Post</button>
                <input type="number" name="idBodyRota" id="idBodyRota" placeholder="Lança o id do seu post!" onChange={(e) => setBodyRota(e.target.value)}></input>
                <button value="Atualiza Post" className='butao2' onClick={(e) => editaPost(e)}>Editar Post</button>
                <button value="Deleta Post" className='butao3' onClick={(e) => deletaPost(e)}>Deleta Post</button>
            </div>


        </form>
    </div>
}

export default NewPost;