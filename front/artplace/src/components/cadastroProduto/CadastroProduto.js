import React, { useState } from "react";
import "./CadastroProduto.css"
import { useNavigate } from "react-router-dom";
import {add_produto} from '../../db/api_produto'


function CadastroProduto(){
    //const [img, setImg] = useState('');
    const [nome, setNome] = useState('');
    const [material, setMaterial] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');

    const navigate = useNavigate()
    
    const id = 1 // Receber o id do usuario

    const handleSubmitProduto =  async (e) =>{
        e.preventDefault();
        const playloadProduto = {
            nome:nome,
            material: material,
            descricao:descricao,
            preco:parseFloat(preco),
            idArtista: id //id
        }
        console.log(playloadProduto);
        await add_produto(JSON.stringify(playloadProduto))
        .then((res)=> {
            console.log(res)
            navigate('/home/perfil')
        })

        let modal = document.querySelector(".cadastroProduto");
        modal.style.display = "none";
    }


    return(
        <div className="cadastroProduto">
            <form onSubmit={handleSubmitProduto}>
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

                <button type="submit">Cadastrar</button>
            </form>
            
        </div>
    );
}

export default CadastroProduto