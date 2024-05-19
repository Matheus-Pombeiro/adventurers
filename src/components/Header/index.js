import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
    const { t } = useTranslation(); // Translator reference

    return (
        <header 
            style={{ backgroundImage:"url(/assets/adventurers-background.png)" }}
            className="w-full min-h-64 lg:h-80 bg-cover bg-center flex flex-col justify-center items-center gap-3 drop-shadow-lg"
        >
            <h1 
                className="text-3xl lg:text-4xl text-white text-center font-bold tracking-wider"
            >
                {t("Adventurers")}
            </h1>

            <nav className="flex justify-center items-center">
                <ThemeSwitcher />
                <LanguageSwitcher />
            </nav>
        </header>
    )
};

export default Header;