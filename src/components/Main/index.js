import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import AddButtons from "../AddButtons";

const Main = () => {
    const [characters, setCharacters] = useState([]);

    const [raceItems, setRaceItems] = useState([
        {
            id: uuidv4(),
            name: "Human"
        },
        {
            id: uuidv4(),
            name: "Elf"
        },
        {
            id: uuidv4(),
            name: "Dwarf"
        }
    ]);

    const [classItems, setClassItems] = useState([
        {
            id: uuidv4(),
            name: "Knight"
        },
        {
            id: uuidv4(),
            name: "Archer"
        },
        {
            id: uuidv4(),
            name: "Mage"
        }
    ]);

    const [specializationItems, setSpecializationItems] = useState([
        {
            id: uuidv4(),
            name: "Damage"
        },
        {
            id: uuidv4(),
            name: "Defense"
        },
        {
            id: uuidv4(),
            name: "Suport"
        }
    ]);

    console.log(characters)

    return (
        <main>
            <AddButtons 
                toRegisterCharacter={character => setCharacters([...characters, character])}
                raceItems={raceItems}
                classItems={classItems}
                specializationItems={specializationItems}
            />
        </main>
    )
};

export default Main;