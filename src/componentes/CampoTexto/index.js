import styles from './campotexto.module.css';

const CampoTexto = ({placeholder, required, value, onChange}) => {
    const whenTyped = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className={styles.campotexto}>
            <input
                className="form-control"
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={whenTyped}
            />
        </div>
    )
}

export default CampoTexto;