import styles from './campotexto.module.css';

const CampoTexto = ({placeholder, required, value, onChange, tipo}) => {
    const whenTyped = (e) => {
        onChange(e.target.value);
    }
    return (
        <div className={styles.campotexto}>
            <input
                className="form-control"
                placeholder={placeholder}
                type={tipo}
                required={required}
                value={value}
                onChange={whenTyped}
            />
        </div>
    )
}

export default CampoTexto;