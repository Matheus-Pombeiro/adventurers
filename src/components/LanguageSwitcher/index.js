const LanguageSwitcher = () => {
    return (
        <>
            <button>
                <img 
                    src="/assets/usa-flag.png" 
                    alt="USA Flag" 
                    title="English" 
                    className="header-btn" 
                />
            </button>
            <button>
                <img 
                    src="/assets/brazil-flag.png" 
                    alt="Brazil Flag" 
                    title="Portuguese" 
                    className="header-btn" 
                />
            </button>
        </>
    )
};

export default LanguageSwitcher;