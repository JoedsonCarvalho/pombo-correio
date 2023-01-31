const CampoHora = ({onChange, value}) => {
    const whenTyped = (e) => {
        onChange(e.target.value)
    } 
    
    return (
        <>
            <input 
            type="time"
            style={{width: '100%', height: '35px', borderRadius: '5px', border: '1px solid #d4d9df'}}
            value={value}
            onChange={whenTyped}
            />
        </>
    )
}

export default CampoHora;