import styles from './dashboard.module.css';
import logo from './assets/pombo_correio.jpeg';
import { useEffect, useState } from 'react';
import Card from '../../componentes/Card';
import { Link } from 'react-router-dom';
import iconeDesligar from './assets/desligar.jpg';

const Dashboard = () => {
    const [lembretes, setLembretes] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(window.localStorage.getItem('user')));

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

    const Deslogar = () => {
        window.localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div className={styles.dashboard}>
            <div className={styles.cabecalho}>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                    <div className={styles.btn_sair} onClick={Deslogar}><img src={iconeDesligar} alt='icone de desligar'/>Sair da conta</div>
                </Link>

                <h1 className={styles.mensagemBemVindo}>Bem-Vindo {user.apelido}</h1>
                <div className={styles.containerEsquerdo}>
                    <div>
                        <Link to="criar-lembrete">
                            <button className="btn botao" style={{background: '#2d3869', color: 'white'}}>Criar novo lembrete</button>
                        </Link>
                    </div>
                    <img src={logo} alt="logo do site"/>
                </div>
            </div>
            

            <section className={styles.cards} >
                    {lembretes.map(l => <Card key={l.id} nome={l.nome} descricao={l.descricao} />)}
            </section>
        </div>
    )
}

export default Dashboard;
