import LanguageSwitcher from "../LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
    return (
        <header 
            style={{ backgroundImage:"url(/assets/adventurers-background.png)" }}
            className="w-full h-64 lg:h-80 bg-cover bg-center flex flex-col justify-center items-center gap-3"
        >
            <h1 
                className="text-3xl lg:text-4xl text-white text-center font-bold tracking-wider"
            >
                Adventurers
            </h1>

            <nav className="flex justify-center items-center">
                <ThemeSwitcher />
                <LanguageSwitcher />
            </nav>
        </header>
    )
};

export default Header;