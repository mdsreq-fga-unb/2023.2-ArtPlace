import "./Avaliacao.css";
import minhaImagem from '../../images/star.png'; 


function Avaliacao(/*id do produto*/) {
  /*
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [novaAvaliacao, setNovaAvaliacao] = useState('');

  useEffect(() => {
    const buscarAvaliacoesDoProduto = async () => {
      try {
        const response = await fetch(`url da api${productId}`);
        if (response.ok) {
          const data = await response.json();
          setAvaliacoes(data.avaliacoes);
        } else {
          throw new Error('Erro ao buscar as avaliações do produto');
        }
      } catch (error) {
        console.error(error);
      }
    };

    buscarAvaliacoesDoProduto();
  }, [productId]);

   const handleSalvarAvaliacao = async () => {
    try {
      const response = await fetch(`https://sua-api.com/avaliacoes/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ texto: novaAvaliacao }),
      });

      if (response.ok) {
        const data = await response.json();
        setAvaliacoes([...avaliacoes, data.novaAvaliacao]);
        setNovaAvaliacao('');
      } else {
        throw new Error('Erro ao salvar a avaliação');
      }
    } catch (error) {
      console.error(error);
    }
  };

  */
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

            <input 
              type="text"
              name="avaliação"
              placeholder="avaliação"
              /*value={novaAvaliacao}
              onChange={(e) => setNovaAvaliacao(e.target.value)}*/
              
            />

            <button /*onClick={handleSalvarAvaliacao}*/>salvar</button>

          </div>
        </div>
      </div>
    );
  }
  
  export default Avaliacao;