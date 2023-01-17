import styles from './formulario.module.css';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';

const Form = () => {
    return (
        <div className={styles.form}>
            <CampoTexto placeholder="Insira seu email:" required={false} />
            <CampoTexto placeholder="Insira sua senha:" required={false} />
            
            <div className={styles.botoes}>
                <Botao pesoFonte='bold' primario={true}>
                    Entrar
                </Botao>
                <Botao primario={false}>
                    Cadastre-se
                </Botao>
            </div>
            
        </div>
    )
}

export default Form;