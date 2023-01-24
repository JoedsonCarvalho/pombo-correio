

const CampoData = ({value, onChange}) => {
    const whenTyped = (e) => {
        onChange(e.target.value);
    }

    return(
        <>
            <input
            style={{width: '100%', height: '35px', borderRadius: '5px', border: '1px solid #d4d9df'}}
            type="date" 
            value={value}
            onChange={whenTyped}
            />
        </>
    )
}

export default CampoData;