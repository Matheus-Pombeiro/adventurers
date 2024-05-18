import { useTranslation } from "react-i18next";

const InputText = ({ data, required, value, toChange }) => {
    const { t } = useTranslation(); // Translator reference

    return (
        <>
            <label 
                htmlFor={data}
                className="label"
            >{data}</label>
            <input 
                type="text"
                id={data} 
                placeholder={t(data)}
                className="input"
                required={required}
                value={value}
                onChange={e => toChange(e.target.value)}
            />
        </>
    )
};

export default InputText;