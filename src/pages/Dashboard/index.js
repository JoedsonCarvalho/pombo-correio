import Botao from '../../componentes/Botao';
import styles from './dashboard.module.css';
import logo from './assets/pombo_correio.jpeg';
import { useEffect, useState } from 'react';
import Card from '../../componentes/Card';

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
    console.log(lembretes);
    return (
        <div className={styles.dashboard}>
            <div className={styles.containerEsquerdo}>
                <div>
                    <Botao primario={true} >Criar novo lembrete</Botao>
                </div>
                <img src={logo} alt="logo do site"/>
            </div>

            <section className={styles.cards} >
                    {lembretes.map(l => <Card key={l.id} nome={l.nome} descricao={l.descricao} />)}
            </section>
        </div>
    )
}

export default Dashboard;