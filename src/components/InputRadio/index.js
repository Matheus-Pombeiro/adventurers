const InputRadio = ({ data, name, toChange }) => {
    return (
        <div className="space-x-2">
            <input
                type="radio"
                id={data}
                name={name}
                onChange={toChange}
                checked={true}
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