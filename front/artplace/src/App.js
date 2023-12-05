
import Header from "./components/Header/Header"

import React, {useState} from "react";
import Login from "./components/loginCadastro/Login";
import Cadastro from "./components/loginCadastro/Cadastro";



function App() {
  const  [ currentForm, setCurrentForm] = useState('register');

  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }

 

  return (
    <>
    <div className="App"> 
      {
        currentForm === "register" ? <Cadastro onFormSwitch = {toggleForm}/>  : <Login onFormSwitch = {toggleForm}/>
      }
    </div>
    </>
    
    
  );

}

export default App;