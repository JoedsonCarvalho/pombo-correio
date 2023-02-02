import styles from './formulario.module.css';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import validator from 'validator'

const FormLogin = ({submit}) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const HandleSubmitLogin = (e) => {
        e.preventDefault();

        if (!email.match(re)){
            alert("Email inválido!, tente novamente.");
            return;
        }
        let formData = new FormData();
        formData.append('email', email);
        formData.append('senha', senha);

        let requestOptions = {
            method: 'POST',
            body: formData
        }

        fetch('http://localhost:5226/pombocorreio/logar', requestOptions)
        .then(result => result.json())
        .then(data => {
            if(data.result){
                window.localStorage.setItem('user', JSON.stringify(data.result))
                window.location.href = '/dashboard';
            }else{
                alert("Login falhou, tente novamente.");
            }
        })
        .catch(err => {
            alert("Login falhou, tente novamente.");
        })

    }

    return (
        <form className={styles.form} onSubmit={HandleSubmitLogin}>
            <CampoTexto
            placeholder="Insira seu email:" 
            required={true} 
            value={email}
            onChange={value => setEmail(value)}
            />
            <CampoTexto 
            placeholder="Insira sua senha:" 
            tipo="password"
            required={true} 
            value={senha}
            onChange={value => setSenha(value)}
            />
            
            <div className={styles.botoes}>
                <Botao pesoFonte='bold' className={'btn btn-light'}>
                    Entrar
                </Botao>
                <Link to="/cadastro">
                    <Botao className={'btn btn-outline-light'}>
                        Cadastre-se
                    </Botao>
                </Link>
            </div>
            
        </form>
    )
}

export default FormLogin;