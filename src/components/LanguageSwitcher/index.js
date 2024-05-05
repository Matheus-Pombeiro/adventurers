import { useTranslation } from 'react-i18next';

const languageOptions = [
    {
        name: "English",
        value: "en",
        flag: "/assets/usa-flag.png",
    },
    {
        name: "Português",
        value: "pt",
        flag: "/assets/brazil-flag.png"
    }
];

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            {languageOptions.map(option => (
                <button 
                    key={option.value}
                    onClick={() => {
                        i18n.changeLanguage(option.value)
                    }}
                >
                    <img  
                        src={option.flag}
                        alt={option.name}
                        title={option.name}
                        className='header-btn'
                    />
                </button>
            ))}
        </>
    )
};

export default LanguageSwitcher;