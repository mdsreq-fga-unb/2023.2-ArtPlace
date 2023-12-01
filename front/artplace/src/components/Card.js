


function Card({img, nome, material, descricao, preco}){

    return(
    <>
    <body className="fundoInit">
    <section className="card">
        <img src={img} alt="fotomeufi" className="imagem"/>
        <div className="retangulo"></div>
        <h3 className="title">{nome}</h3>
        <h3 className="material">{material}</h3>
        <h3 className="description">{descricao}</h3>
        <h3 className="price">{preco}</h3>
    </section>
    </body>
   
     </>
    )
    
}

export default Card;