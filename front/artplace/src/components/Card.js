import React from "react";
import { Link } from "react-router-dom";
import Compra from "./compra/Compra";

function Card({img, nome, material, descricao, preco}){

    function abrirContato(e){
        let modal = document.querySelector(".compraSection");
        modal.style.display = "block";
    }

    return(
    <>
    <div className="fundoInit">
    <Compra/>
        <section className="card">
            <div className="headCard">
                <img src={img} alt="fotomeufi" className="imagem"/>
                <h3 className="title">{nome}</h3>
                <h3 className="material">Material: {material}</h3>
            </div>
            <div className="clear"></div>
            <div className="bodyCard">
                <h3 className="description">Descrição: {descricao}</h3>
                <h3 className="price">{preco}</h3>
            </div>
            <div className="clear"></div>
            <div className="avaliacaoProduto">
                <Link to="avaliacao" className="avaliacaoLink">Avaliação</Link>
            </div>
        </section>
        <button onClick={(e) => abrirContato(e)} className="comprar">Comprar</button>
     
    </div>
   
     </>
    )
    
}

export default Card;