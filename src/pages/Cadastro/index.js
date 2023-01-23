import styles from './cadastro.module.css';
import Titulo from '../../componentes/Titulo';
import FormCadastro from '../../componentes/FormCadastro';
import CampoTexto from '../../componentes/CampoTexto';
import Botao from '../../componentes/Botao';
import { Link } from 'react-router-dom';
import logoSecundaria from './assets/pombo_correio.jpeg';
import { useEffect, useState } from 'react';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [apelido, setApelido] = useState('');
    const [senha, setSenha] = useState('');
    const [segundasenha, setSegundaSenha] = useState('');

    function HandleSubmit(e) {
        e.preventDefault();
        console.log(e.target);
        console.log(nome);
        console.log(sobrenome);
        console.log(email);
        console.log(apelido);
        console.log(senha);
        console.log(segundasenha);

        let formData = new FormData();
        formData.append('nome', nome);
        formData.append('sobrenome', sobrenome);
        formData.append('email', email);
        formData.append('apelido', apelido);
        formData.append('senha', senha);


        let requestOptions = {
            method: 'POST',
            body: formData
        }

        fetch('http://localhost:5226/pombocorreio/cadastro', requestOptions)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            console.log(data.status);
        })
        .catch(err => console.log(err))


    }

    return (
        <div className={styles.cadastro}>
            <Titulo texto="Cadastre-se no Pombo correio"/>
            
            <div className={styles.container}>
                <FormCadastro onSubmit={HandleSubmit}>
                    <CampoTexto 
                    placeholder="Insira seu primeiro nome:" 
                    value={nome} 
                    onChange={value => setNome(value)} 
                    />
                    <CampoTexto 
                    placeholder="Insira seu sobrenome:"
                    value={sobrenome} 
                    onChange={value => setSobrenome(value)} 
                    />

                    <CampoTexto 
                    placeholder="Insira seu email:"
                    value={email} 
                    onChange={value => setEmail(value)} 
                    />
                    <CampoTexto 
                    placeholder="Coloque aqui como você deseja ser chamado:"
                    value={apelido} 
                    onChange={value => setApelido(value)} 
                    />

                    <CampoTexto 
                    placeholder="Insira sua senha:"
                    value={senha} 
                    onChange={value => setSenha(value)} 
                    />

                    <CampoTexto 
                    placeholder="Insira sua senha:"
                    value={segundasenha} 
                    onChange={value => setSegundaSenha(value)} 
                    />

                    <div className={styles.botoes}>
                        <Botao primario={true} >Cadastrar</Botao>

                        <Link to="/">
                            <Botao primario={false}>Voltar à tela anterior</Botao>
                        </Link>
                    </div>
                </FormCadastro>

                <img src={logoSecundaria} alt="logo com o pombo correio carteiro" />
            </div>
        </div>
    )
}

export default Cadastro;