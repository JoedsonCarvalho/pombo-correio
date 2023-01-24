import styles from './titulo.module.css'

function Titulo ({children}) {
    return(
        <div className={styles.titulo}>
            <h1>{children}</h1>
        </div>
    )
}

export default Titulo