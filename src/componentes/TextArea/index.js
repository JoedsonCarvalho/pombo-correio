
const TextArea = ({rows, value, onChange, placeholder, required}) => {
    const whenTyped = (e) => {
        onChange(e.target.value);
    }

    return(
        <>
        <textarea 
        rows={rows} 
        value={value} 
        onChange={whenTyped}
        required={required} 
        style={{border: '1px solid #d4d9df'}}
        placeholder={placeholder}></textarea>
        </>
    )
}

export default TextArea;