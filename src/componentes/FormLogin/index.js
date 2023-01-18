import styles from './formulario.module.css';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FormLogin = ({submit}) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const HandleSubmitLogin = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(senha);

        // let formData = new FormData();
        // formData.append('email', email);
        // formData.append('senha', senha);

        // let requestOptions = {
        //     method: 'GET',
        //     body: formData
        // }

        // fetch('url_login', requestOptions)
        // .then(result => result.json())
        // .then(data => {
        //     console.log(data);
        // })
        // .catch(err => console.log(err))

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
            required={true} 
            value={senha}
            onChange={value => setSenha(value)}
            />
            
            <div className={styles.botoes}>
                <Botao pesoFonte='bold' primario={true}>
                    Entrar
                </Botao>
                <Link to="/cadastro">
                    <Botao primario={false}>
                        Cadastre-se
                    </Botao>
                </Link>
            </div>
            
        </form>
    )
}

export default FormLogin;