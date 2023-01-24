// import styles from './botao.module.css';
const Botao = ({children, pesoFonte, className, css}) => {
    return(
        <button  type='submit'
        className={className}
        style={{fontWeight: pesoFonte, marginLeft: '20px', css }}
        >{children}</button>
    )
}

export default Botao;