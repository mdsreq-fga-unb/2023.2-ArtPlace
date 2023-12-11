import "./Avaliacao.css";
import minhaImagem from '../../images/star.png'; 
import { Link, useNavigate } from "react-router-dom";
import {add_avaliacao} from '../../db/api_avaliacao'
import { useState } from "react";


function Avaliacao() {
  
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [novaAvaliacao, setNovaAvaliacao] = useState('');

  const navigate = useNavigate()

  const handleAvaliacao =  async (e) =>{
    e.preventDefault();
    const playloadAvaliacao = {
        avaliacao: avaliacoes
    }
    console.log(playloadAvaliacao);
    await add_avaliacao(JSON.stringify(playloadAvaliacao))
    .then((res)=> {
        console.log(res)
        navigate('/home')
    })

  }
    return (
      <div className="avaliacao">
        <div  className="centerAvaliacao">
          <div className="avaliacaoDisponivel">
              <h2>Avaliações</h2>
              {/*{avaliacoes.map((avaliacao, index) => (*/}
                <div className="avaliacaoIndividual" /*key={index}*/>
                  <p>{/*avaliacao.texto*/}</p>
                  <img src={minhaImagem} alt="Minha Imagem" />
                  <p>{/*avaliacao.nota*/}</p>
                </div>
               {/*))}*/}
              <div className="clear"></div>
          </div>

          <div className="facaAvaliacao">
            <h2>Coloque aqui a sua avaliação</h2>

            <form onSubmit={handleAvaliacao}>
              <input 
                type="text"
                name="avaliação"
                placeholder="avaliação"
                value={novaAvaliacao}
                onChange={(e) => setNovaAvaliacao(e.target.value)}
                
              />

              <button type="submit">salvar</button>
              <Link className="voltaHome" to="/home">Voltar</Link>
            </form>

          </div>
        </div>
      </div>
    );
  }
  
  export default Avaliacao;