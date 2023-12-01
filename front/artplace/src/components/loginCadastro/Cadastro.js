import  React, { useState } from 'react';
import user_icon from '../assets/Vector.png'

import "./Cadastro.css";

export const  Cadastro = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        
        <div className='page'>
            <div className='texto'>
                <h2 content='descricao'>O que é o ArtPlace?</h2>
                <span>Texto que fala sobre a nossa plataforma</span>
            </div>
            <div className='Form-Container'>

                <div className='ball'>
                    <img class="image" src={user_icon} alt="Imagem na bola"/>
                </div>

                <form className='Register-form' onSubmit={handleSubmit}>
                    <div className='input'>
                        <input value = {name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder=' nome' />
                    </div>
               
                    <div className='input'>
                        <input value = {email} onChange={(e) => setEmail(e.target.value)} type = 'email' placeholder = ' email'/>
                    </div>
            
                    <div className='input'>
                        <input value = {number} onChange={(e) => setNumber(e.target.value)} name = 'number' id = 'number' placeholder=' telefone'/>
                    </div>
                
                    <div className='input'>
                        <input value = {password} onChange={(e) => setPass(e.target.value)} type = 'password' placeholder=' senha' />
                    </div>

                    <button className='botao' onClick={() => props.onFormSwitch('login')}> Ja possui uma conta? Clique aqui para acessá-la</button>

                    <h1>Você é artista?</h1>

                    <div className='switchArtista'>
                        <label class="switch-label">Sim</label>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                        <label class="switch-label">Não</label>
                    </div>

                    <button className = 'botao-submit' type='submit'> Cadastrar </button>
                
                </form>
            </div>
        </div>   
        
    );
}

export default Cadastro;