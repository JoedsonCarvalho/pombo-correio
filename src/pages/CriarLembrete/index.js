import styles from './criarlembrete.module.css';
import Titulo from '../../componentes/Titulo';
import CampoTexto from '../../componentes/CampoTexto';
import { useEffect, useState } from 'react';
import TextArea from '../../componentes/TextArea';
import CampoData from '../../componentes/CampoData';
import CampoHora from '../../componentes/CampoHora';

const CriarLembrete = () => {
    
    const [user, setUser] = useState({});
    useEffect(() => {setUser(JSON.parse(window.localStorage.getItem('user')))}, [] );

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    
    const whenSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("idUsuario", user.id);
        formData.append("nome", nome);
        formData.append("descricao", descricao);
        formData.append("dt_lembrete", data);
        formData.append("hr_lembrete", hora);

        console.log(nome);

        let requestOptions = {
            method: 'POST',
            body: formData
        }
        
        fetch("http://localhost:5226/lembrete/createlembrete", requestOptions)
        .then(result => result.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))
    }

    // const date = new Date()
    // let dataAtual = `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`;   
    return (

        <div className={styles.criarlembrete}>
            <Titulo>Crie seu lembrete aqui!!</Titulo>

                <form onSubmit={whenSubmit} className={styles.form}>
                    <CampoTexto 
                    placeholder="Insira o nome do lembrete" 
                    required={true} 
                    value={nome} 
                    onChange={value => setNome(value)}
                    />

                    <TextArea 
                    rows="5"
                    placeholder="Insira a descrição de seu lembrete"
                    value={descricao} 
                    onChange={value => setDescricao(value)}
                    />

                    <h3 style={{whiteSpace: 'nowrap', color: '#2d3869', marginTop: '20px'}}>Escolha o dia do lembrete no calendário abaixo:</h3>

                    <CampoData
                    value={data}
                    onChange={value => setData(value)}
                    />

                    <h4 style={{whiteSpace: 'nowrap', color: '#2d3869', marginTop: '10px'}}>Insira o horário do lembrete abaixo:</h4>

                    <CampoHora 
                    value={hora}
                    onChange={value => setHora(value)}
                    />

                    <button style={{background: '#2d3869', color: 'white', marginTop: '20px', padding: '20px', fontSize: '24px'}} className="btn">Salvar lembrete</button>                
                </form>

        </div>
    )
}

export default CriarLembrete;