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
        let idUsuario = JSON.parse(window.localStorage.getItem('user')).id;
        fetch(`http://localhost:5226/lembrete/lembreteporusuario/${idUsuario}`, requestOptions)
        .then(result => result.json())
        .then(data => {
            setLembretes(data.result);
        })
        .catch(err => console.log(err))
    }, [])

    const Deslogar = () => {
        window.localStorage.clear();
        window.location.href = '/';
    }

    const DeletaLembrete = (id) => {
        console.log(id);

        let requestOptions = {
            method: 'DELETE',
        }

        fetch(`http://localhost:5226/lembrete/deletelembrete/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data.result)
            if(data.result){
                alert(`Lembrete '${data.result.nome}' apagado com sucesso!`);
                window.location.reload();
            }else{
                alert("Não foi possível apagar lembrete.");
            }
        })
        .catch(err => {
            alert("Não foi possível apagar lembrete.");
        })
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
                    { lembretes.length ? lembretes.map(l => <Card key={l.id} nome={l.nome} descricao={l.descricao} click={() => DeletaLembrete(l.id)}/>) : <h1 style={{marginTop: '10px', color: '#2d3869'}}>Adicione um lembrete</h1>}
            </section>
        </div>
    )
}

export default Dashboard;
