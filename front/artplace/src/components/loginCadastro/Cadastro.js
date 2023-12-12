import  React, { useState } from 'react';
import user_icon from '../assets/Vector.png'
import { Link, useNavigate } from 'react-router-dom';

import {add_user} from '../../db/api_usuario'
import "./Cadastro.css";

export const  Cadastro = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPass] = useState('');

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const playload = {
          nome: name,
          email: email,
          senha: password,
          telefone: number,
          isArtist: isChecked
        }
        await add_user(JSON.stringify(playload))
        .then((res)=> {
            console.log(res)
            navigate('/login')
        })
    }
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    }

    return(
        
        <div className='page'>
            <div className='texto'>
                <h2 content='descricao'>O que é o ArtPlace?</h2>
                <span>O ArtPlace é uma solução web desenvolvida para a artesã autônoma Cristiane Gonçalves Cabeceira de Freitas, visando superar a falta de exclusividade em plataformas existentes. Este projeto oferece um espaço exclusivo para pequenos artistas e artesãos exibirem e venderem seus produtos, criando uma comunidade interativa. O diferencial está na visibilidade proporcionada aos artistas e na promoção da interação entre eles e os potenciais clientes, superando as limitações das plataformas de venda convencionais. A iniciativa visa ajudar a cliente e outros artistas a superarem desafios na divulgação e venda de seus trabalhos.</span>
            </div>
            <div className='Form-Container'>

                <div className='ball'>
                    <img class="image" src={user_icon} alt="Imagem na bola"/>
                </div>

                <form className='Register-form' onSubmit={handleSubmit}>
                    <div className='input'>
                        <input value = {name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder=' nome' required/>
                    </div>
               
                    <div className='input'>
                        <input value = {email} onChange={(e) => setEmail(e.target.value)} type = 'email' placeholder = ' email' required/>
                    </div>
            
                    <div className='input'>
                        <input value = {number} onChange={(e) => setNumber(e.target.value)} name = 'number' id = 'number' placeholder=' telefone' type='number' maxLength={11} minLength={9} required/>
                    </div>
                
                    <div className='input'>
                        <input value = {password} onChange={(e) => setPass(e.target.value)} type = 'password' placeholder=' senha' required />
                    </div>
                    
                    <Link to="/login" className='linkCadastro'>Ja possui uma conta? <br/>Clique aqui para acessá-la</Link>
                    
                    
                    <h1>Você é artista?</h1>

                    <div className='switchArtista'>
                        <label className="checkbox-label">
                            <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            />
                            <span className="custom-checkbox"></span>
                            <span className="checkbox-text">{isChecked ? 'Sim' : 'Não'}</span>
                        </label>
                    </div>

                    <button className = 'botao-submit' type='submit'> Cadastrar </button>
                
                </form>
            </div>
        </div>   
        
    );
}

export default Cadastro;