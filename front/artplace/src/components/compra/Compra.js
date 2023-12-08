import React from "react";
import "./Compra.css";


function Compra(){
    function fecharContato(e){
        let modal = document.querySelector(".compraSection");
        modal.style.display = "none";
    }

    return(
    <div className="compraSection">
        <h1>Entre em contato com o vendedor</h1>
        <p>telefone: 9 9999-9999</p>
        <button onClick={(e) => fecharContato(e)}>fechar</button>
    </div>
);
    

}

export default Compra;