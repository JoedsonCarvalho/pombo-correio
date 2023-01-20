// import styles from './botao.module.css';
const Botao = ({children, pesoFonte, className}) => {
    return(
        <button  type='submit'
        className={className}
        style={{fontWeight: pesoFonte, marginLeft: '20px', height: 'auto' }}
        >{children}</button>
    )
}

export default Botao;