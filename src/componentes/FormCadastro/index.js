import styles from './form.module.css';

const FormCadastro = ({children}) => {
    return (
        <form className={styles.form}>
            {children}
        </form>
    )
}

export default FormCadastro;