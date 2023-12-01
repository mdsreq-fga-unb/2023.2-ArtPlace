import  React, { useState } from 'react';
import "./Login.css";
import pintor_image from '../assets/2 1.png'


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className='problema2'>
        <div className='page'>
            <img class="image" src={pintor_image} alt="Imagem na bola"/>
            <div className='Login-Form-Container'>
                <form className='Login-form'onSubmit={handleSubmit}>
                        <div className='inputlogin'>
                            <label htmlFor='email'></label>
                            <input value = {email} onChange={(e) => setEmail(e.target.value)} type = 'email' placeholder = 'email'/>
                        </div>
                        
                        <div className='inputlogin'>
                            <label htmlFor='senha'></label>
                            <input value = {password} onChange={(e) => setPass(e.target.value)} type = 'password' placeholder='senha' />
                        </div>
                        
                        <button className='botao-cadastro'onClick={( ) => props.onFormSwitch('register')}>Ainda não possui um cadastro?</button>

                        <button className = 'botao-submit-login' type='submit'> Login </button>
                        <div className='LoginTeste'>
                            <a href='home'>teste meufi</a>
                        </div>
                        
                </form>
                
            </div>
        </div>
        </div>
        
    );
}

export default Login;