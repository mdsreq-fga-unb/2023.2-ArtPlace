import React, { useState } from "react";
import "./CadastroProduto.css"


function CadastroProduto(){
    const [img, setImg] = useState('');
    const [nome, setNome] = useState('');
    const [material, setMaterial] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');


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
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                placeholder="material"
                type="text"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
            />
            <input
                placeholder="descrição"
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />
            <input
                placeholder="preço"
                type="text"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
            />

            <button onClick={(e) => fecharCadastroProduto(e)}>Cadastrar</button>
            
        </div>
    );
}

export default CadastroProduto