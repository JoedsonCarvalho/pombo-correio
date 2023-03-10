import styles from './cadastro.module.css';
import Titulo from '../../componentes/Titulo';
import FormCadastro from '../../componentes/FormCadastro';
import CampoTexto from '../../componentes/CampoTexto';
import Botao from '../../componentes/Botao';
import { Link } from 'react-router-dom';
import logoSecundaria from './assets/pombo_correio.jpeg';
import { useState } from 'react';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [apelido, setApelido] = useState('');
    const [senha, setSenha] = useState('');
    const [segundasenha, setSegundaSenha] = useState('');

    function HandleSubmit(e) {
        e.preventDefault();

        let formData = new FormData();
        formData.append('nome', nome);
        formData.append('sobrenome', sobrenome);
        formData.append('email', email);
        formData.append('apelido', apelido);
        formData.append('senha', senha);

        let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (!email.match(re)){
            alert("Email inválido!, tente novamente.");
            return;
        }

        if (senha !== segundasenha){
            alert("As senhas devem ser iguais para efetuar o cadastro!");
            return
        }

        let requestOptions = {
            method: 'POST',
            body: formData
        }

        fetch('http://localhost:5226/pombocorreio/cadastro', requestOptions)
        .then(result => result.json())
        .then(data => {
            if(data){
                window.location.href = "/";
            }else{
                alert("Você não foi cadastrado, tente novamente.");
            }
            
        })
        .catch(err => {
            err = `${err}`;
            let msgErr = err.split('"');
            if (msgErr[1] === "Email já cadastrado"){alert("Email já cadastrado no sistema.") }
        })
        

    }

    return (
        <div className={styles.cadastro}>
            <Titulo>Cadastre-se no Pombo correio</Titulo>
            
            <div className={styles.container}>
                <FormCadastro onSubmit={HandleSubmit}>
                    <CampoTexto 
                    placeholder="Insira seu primeiro nome:" 
                    value={nome} 
                    required={true}
                    onChange={value => setNome(value)} 
                    />
                    <CampoTexto 
                    placeholder="Insira seu sobrenome:"
                    value={sobrenome} 
                    required={true}
                    onChange={value => setSobrenome(value)} 
                    />

                    <CampoTexto 
                    placeholder="Insira seu email:"
                    value={email} 
                    required={true}
                    onChange={value => setEmail(value)} 
                    />
                    <CampoTexto 
                    placeholder="Coloque aqui como você deseja ser chamado:"
                    value={apelido} 
                    required={true}
                    onChange={value => setApelido(value)} 
                    />

                    <CampoTexto 
                    placeholder="Insira sua senha:"
                    value={senha}
                    tipo="password" 
                    required={true}
                    minLength="6"
                    onChange={value => setSenha(value)} 
                    />

                    <CampoTexto 
                    placeholder="Insira sua senha:"
                    value={segundasenha}
                    tipo="password" 
                    required={true}
                    minLength="6"
                    onChange={value => setSegundaSenha(value)} 
                    />

                    <div className={styles.botoes}>
                        <Botao className={'btn btn-light'} >Cadastrar</Botao>

                        <Link to="/">
                            <Botao className={'btn btn-outline-light'}>Voltar à tela anterior</Botao>
                        </Link>
                    </div>
                </FormCadastro>

                <img src={logoSecundaria} alt="logo com o pombo correio carteiro" />
            </div>
        </div>
    )
}

export default Cadastro;