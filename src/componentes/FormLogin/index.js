import styles from './formulario.module.css';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';
import { Link } from 'react-router-dom';

const FormLogin = () => {
    return (
        <div className={styles.form}>
            <CampoTexto placeholder="Insira seu email:" required={false} />
            <CampoTexto placeholder="Insira sua senha:" required={false} />
            
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
            
        </div>
    )
}

export default FormLogin;