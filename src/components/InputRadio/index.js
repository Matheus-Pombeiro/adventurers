const InputRadio = ({ data, name, value, toChange }) => {
    return (
        <div className="space-x-2">
            <input
                type="radio"
                id={data}
                name={name}
                value={value}
                onChange={e => toChange(e.target.value)}
                defaultChecked={value === true}
            />
            <label 
                htmlFor={data}
                className="label"
            >
                {data}
            </label>
        </div>
    )
};

export default InputRadio;