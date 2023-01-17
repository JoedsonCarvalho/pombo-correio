import styles from './cadastro.module.css';
import Titulo from '../../componentes/Titulo';
import FormCadastro from '../../componentes/FormCadastro';
import CampoTexto from '../../componentes/CampoTexto';
import Botao from '../../componentes/Botao';
import { Link } from 'react-router-dom';
import logoSecundaria from './assets/pombo_correio.jpeg';

const Cadastro = () => {
    return (
        <div className={styles.cadastro}>
            <Titulo texto="Cadastre-se no Pombo correio"/>
            
            <div className={styles.container}>
                <FormCadastro>
                    <CampoTexto placeholder="Insira seu primeiro nome:" />
                    <CampoTexto placeholder="Insira seu sobrenome:"/>
                    <CampoTexto placeholder="Insira seu email:"/>
                    <CampoTexto placeholder="Coloque aqui como você deseja ser chamado:"/>
                    <CampoTexto placeholder="Insira sua senha:"/>
                    <CampoTexto placeholder="Insira sua senha:"/>

                    <div className={styles.botoes}>
                        <Botao primario={true}>Cadastre-se</Botao>

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