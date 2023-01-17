import styles from './campotexto.module.css';

const CampoTexto = ({placeholder, required, value}) => {
    return (
        <div className={styles.campotexto}>
            <input
                className="form-control"
                placeholder={placeholder}
                required={required}
                value={value}
            />
        </div>
    )
}

export default CampoTexto;