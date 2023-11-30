import "./Avaliacao.css";
import minhaImagem from '../../images/star.png'; 


function Avaliacao() {
    return (
      <div className="avaliacao">
        <div  className="centerAvaliacao">
          <div className="avaliacaoDisponivel">
              <h2>Avaliações</h2>
              <div className="avaliacaoIndividual">
                <p>muiot bom</p>
                <img src={minhaImagem} alt="Minha Imagem" />
                <p>5</p>
              </div>
              <div className="clear"></div>
          </div>

          <div className="facaAvaliacao">
            <h2>Coloque aqui a sua avaliação</h2>

            <input 
              type="text"
              name="avaliação"
              placeholder="avaliação"
            />

            <button>salvar</button>

          </div>
        </div>
      </div>
    );
  }
  
  export default Avaliacao;