import { useTranslation } from "react-i18next";

const DropDown = ({ data, listItems, value, toChange }) => {
    const { t } = useTranslation(); // Translator reference

    return (
        <>
            <label 
                htmlFor={data}
                className="label"
            >{data}</label>
            <select
                id={data}
                value={value}
                className="input"
                required={true}
                onChange={e => toChange(e.target.value)}
            >
                <option value="">{t(data)}</option>
                {listItems.map(item => (
                    <option 
                        key={item.id} 
                        value={item.name}
                    >
                        {item.name}
                    </option>
                ))}
            </select>
        </>
    )
};

export default DropDown;