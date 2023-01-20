import Botao from '../../componentes/Botao';
import styles from './dashboard.module.css';
import logo from './assets/pombo_correio.jpeg';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [lembretes, setLembretes] = useState([]);

    useEffect(() => {
        let requestOptions = {
            method: 'GET',
        }

        fetch("https://my-json-server.typicode.com/JoedsonCarvalho/mock-api-lembretes/lembretes", requestOptions)
        .then(result => result.json())
        .then(data => {
            setLembretes(data);
        })
        .catch(err => console.log(err))
    }, [])
    
    return (
        <div className={styles.dashboard}>
            <div className={styles.containerEsquerdo}>
                <div>
                    <Botao className={'btn btn-outline-light'} pesoFonte="500" >Criar novo lembrete</Botao>
                </div>
                <img src={logo} alt="logo do site"/>
            </div>
        </div>
    )
}

export default Dashboard;