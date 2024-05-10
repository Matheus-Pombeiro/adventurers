const InputText = ({ data, value, toChange }) => {
    return (
        <>
            <label 
                htmlFor={data}
                className="label"
            >{data}</label>
            <input 
                type="text"
                id={data} 
                placeholder={`Insert the ${data}...`}
                className="input"
                required={true}
                value={value}
                onChange={e => toChange(e.target.value)}
            />
        </>
    )
};

export default InputText;