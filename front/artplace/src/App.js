import Avaliacao from "./components/avaliação/Avaliacao";

function App() {
  function abrirAvaliação(e){
    e.preventDefault();

    let modal = document.querySelector(".avaliacao");
    modal.style.display = "block";
  }

  return (
    <div className="App">
      <button onClick={(e) => abrirAvaliação(e)}>oi</button>
      <Avaliacao/>
    </div>
    
  );
}

export default App;
