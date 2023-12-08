import React from "react";
import { Link } from "react-router-dom";

function Perfil(){
    return(
        <div className="perfil">
            <div className="headPerfil">
                <div className="imagemPerfil">imgaem de perfil</div>
                <p>telefone</p>
                <p>e-mail</p>
                <div className="clear"></div>
                <button>Cadastrar Produto</button>
            </div>

            {/*se for artista tem os produtos */}
        </div>
    );
}

export default Perfil

