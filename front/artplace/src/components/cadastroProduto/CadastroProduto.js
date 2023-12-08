import React from "react";
import "./CadastroProduto.css"


function CadastroProduto(){
    function fecharCadastroProduto(e){
        e.preventDefault();
        let modal = document.querySelector(".cadastroProduto");
        modal.style.display = "none";
    }
    return(
        <div className="cadastroProduto">
            <input
                placeholder="nome"
                type="text"
            />
            <input
                placeholder="material"
                type="text"
            />
            <input
                placeholder="descrição"
                type="text"
            />
            <input
                placeholder="preço"
                type="text"
            />

            <button onClick={(e) => fecharCadastroProduto(e)}>Cadastrar</button>
            
        </div>
    );
}

export default CadastroProduto