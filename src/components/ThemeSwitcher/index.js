import { useTranslation } from "react-i18next";

const ThemeSwitcher = () => {
    const { t } = useTranslation(); // Translator reference

    const handleTheme = (e) => {
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.contains("dark")
            ? e.target.src = "/assets/moon-white.png"
            : e.target.src = "/assets/sun-white.png";


    };

    return (
        <button onClick={handleTheme}>
            <img
                src="/assets/sun-white.png" 
                alt="Theme" 
                title={t("Theme")} 
                className="header-btn"
            />
        </button>
    )
};

export default ThemeSwitcher;