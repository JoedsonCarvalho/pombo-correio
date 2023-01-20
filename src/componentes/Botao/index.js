// import styles from './botao.module.css';

const Botao = ({children, pesoFonte, primario, onClick}) => {
    let ehPrimario;
    if (primario){
        ehPrimario = 'btn-light';
    }else{
        ehPrimario = 'btn-outline-light';
    }

    return(

        <button  type='submit'

        className={`btn ${ehPrimario}`}
        style={{fontWeight: pesoFonte, marginLeft: '20px', height: 'auto' }}
        >{children}</button>
    )
}

export default Botao;