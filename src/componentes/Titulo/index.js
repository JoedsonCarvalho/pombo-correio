import styles from './titulo.module.css'

function Titulo ({texto}) {
    return(
        <div className={styles.titulo}>
            <h1>{texto}</h1>
        </div>
    )
}

export default Titulo