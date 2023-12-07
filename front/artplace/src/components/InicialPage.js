import "./InicialPage.css"
import Products from "./products/Products"
import Card from "./Card";
import produtos from "../db/data";
import Header from "./Header/Header"


function InitialPage(){

    function geraProd(produtos){
        let produtosFiltrados = produtos;
        return produtosFiltrados.map(
          ({img, nome, material, descricao, preco}) => (
            <Card 
            img={img}
            nome={nome}
            material={material}
            descricao={descricao}
            preco={preco}
            />
          )
        )
      }
      
      const result = geraProd(produtos);

    return(
      <>
        <Header/>
        <div className="BackGround">
          <Products result={result}/>
        </div>
      </>
    )
}

export default InitialPage