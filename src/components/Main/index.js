import { useState } from "react";

import AddButtons from "../AddButtons";

const Main = () => {
    const [characters, setCharacters] = useState([]);

    console.log(characters)

    return (
        <main>
            <AddButtons 
                toRegisterCharacter={character => setCharacters([...characters, character])}
            />
        </main>
    )
};

export default Main;