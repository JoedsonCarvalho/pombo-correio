import Botao from '../../componentes/Botao';
import styles from './dashboard.module.css';
import logo from './assets/pombo_correio.jpeg';
import { useEffect, useState } from 'react';
import Card from '../../componentes/Card';
import { Link } from 'react-router-dom';

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
    // css="background-color: '#2d3869'"
    return (
        <div className={styles.dashboard}>
            <div className={styles.containerEsquerdo}>
                <div>
                    <Link to="criar-lembrete">
                        <button className="btn botao" style={{background: '#2d3869', color: 'white'}}>Criar novo lembrete</button>
                    </Link>
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