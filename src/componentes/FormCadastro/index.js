import styles from './form.module.css';

const FormCadastro = ({children, onSubmit}) => {
    return (
        <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
            {children}
        </form>
    )
}

export default FormCadastro;