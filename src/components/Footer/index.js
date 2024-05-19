const Footer = () => {
    const data = new Date();
    const year = data.getFullYear()

    return (
        <footer className="w-full min-h-12 bg-neutral-600 dark:bg-neutral-900 flex justify-center items-center">
            <p className="text-white text-lg font-semibold">
                <a 
                    href="https://www.linkedin.com/in/matheus-pombeiro/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Matheus Pombeiro
                </a> | {year}
            </p>
        </footer>
    )
};

export default Footer;