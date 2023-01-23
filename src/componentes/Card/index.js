import styles from './card.module.css';
import iconeLixeira from './assets/lixeira.png';

const Card = ({nome, descricao}) => {
    const cor = Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');

    return (
        <div className={styles.card} style={{'backgroundColor': `#${cor}`, 'color': 'black'}}>
            <h2>{nome}</h2>
            <p>{descricao}</p>

            <div className={styles.imagens}>
                <img alt="icone lixeira" src={iconeLixeira} />
            </div>
        </div>
    )
}

export default Card;