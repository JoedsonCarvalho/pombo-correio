import styles from './card.module.css';
import iconeLixeira from './assets/lixeira.png';

const Card = ({nome, descricao}) => {
    return (
        <div className={styles.card}>
            <h2>{nome}</h2>
            <p>{descricao}</p>

            <div className={styles.imagens}>
                <img alt="icone lixeira" src={iconeLixeira} />
            </div>
        </div>
    )
}

export default Card;