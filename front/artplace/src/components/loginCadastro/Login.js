import  React, { useState } from 'react';
import "./Login.css";
import pintor_image from '../assets/2 1.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {login_user} from '../../db/api_usuario'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const playload = {
            email: email,
            senha: senha
        }
        await login_user(JSON.stringify(playload)).then(
            (res)=>{
                if (res != null){
                    setErro('')
                    navigate('/home', { state: { isArtista: res.isartist } });
                }else {
                    setErro('Verifique a senha ou email')
                }
            }
        )
    };

    return(
        
        <div className='page2'>
            <img class="image" src={pintor_image} alt="Imagem na bola"/>
            <div className='Login-Form-Container'>
                <form className='Login-form'onSubmit={handleLogin}>
                        <div className='inputlogin'>
                            <label htmlFor='email'></label>
                            <input value = {email} onChange={(e) => setEmail(e.target.value)} type = 'email' placeholder = 'email'/>
                        </div>
                        
                        <div className='inputlogin'>
                            <label htmlFor='senha'></label>
                            <input value = {senha} onChange={(e) => setSenha(e.target.value)} type = 'password' placeholder='senha' />
                        </div>
                        
                        <Link to="/" className='linkCadastro'>Não possui cadastro</Link>

                        <button className = 'botao-submit-login' type='submit'>Login</button>
                        
                </form>
                {erro && <p style={{ color: 'red', margin:'4%', textAlign:'center'}}>{erro}</p>}
                
            </div>
        </div>
        
        
    );
}

export default Login;