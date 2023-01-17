import { useState } from 'react';
import Form from '../../componentes/Form';
import Titulo from '../../componentes/Titulo';
import styles from './login.module.css';
import logo from './assets/logo.jpeg'

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <div className={styles.login}>
            <Titulo texto="Bem vindo ao Pombo Correio!!" />
            
            <div className={styles.main}>
                <Form /> 
                <img src={logo} alt="logo do site( um pombo vestido de carteiro )"/>
            </div>
           
        </div>
    )
}

export default Login