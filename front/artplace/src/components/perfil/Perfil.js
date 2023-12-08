import React from "react";
import { Link } from "react-router-dom";
import "./Perfil.css"
import Header from "../Header/Header";
import Products from "../products/Products";
import Card from "../Card";
import produtos from "../../db/data";

function Perfil(){
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
        <div className="perfil">
            <Header/>
            <div className="headPerfil">
                <div className="imagemPerfil">imgaem de perfil</div>
                <p>telefone</p>
                <p>e-mail</p>
                
                <button>Cadastrar Produto</button>
                <button><Link className="linkParaAHome" to="/home">Voltar pra home</Link></button>

                <div className="clear"></div>
            </div>

            {/*se for artista tem os produtos */}

            <Products result={result}/>
        </div>
    );
}

export default Perfil

