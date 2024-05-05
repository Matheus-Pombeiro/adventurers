const ThemeSwitcher = () => {
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
                title="Theme" 
                className="header-btn"
            />
        </button>
    )
};

export default ThemeSwitcher;