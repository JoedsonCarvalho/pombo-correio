// import { useState } from 'react';
import FormLogin from '../../componentes/FormLogin';
import Titulo from '../../componentes/Titulo';
import styles from './login.module.css';
import logo from './assets/logo.jpeg'

function Login() {

    return(
        <div className={styles.login}>
            <Titulo texto="Bem vindo ao Pombo Correio!!" />
            
            <div className={styles.main}>
                <FormLogin /> 
                <img src={logo} alt="logo do site( um pombo vestido de carteiro )"/>
            </div>
           
        </div>
    )
}

export default Login;