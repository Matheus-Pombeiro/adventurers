import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import AddButtons from "../AddButtons";
import Team from "../Team";

const Main = () => {
    // Declare a range of states tha contain data about the project's business rules
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
            name: "Damage",
            color: "#f61e43"
        },
        {
            id: uuidv4(),
            name: "Defense",
            color: "#1e92f6"
        },
        {
            id: uuidv4(),
            name: "Suport",
            color: "#59dd55"
        }
    ]);

    console.log(characters)

    // Declare a function that delete the character selected by the user
    const deleteCharacter = (id) => {
        setCharacters(characters.filter(character => character.id !== id));
    };

    // Declare a function that change the character's status (alive / dead)
    const changeStatus = (id) => {
        setCharacters(characters.map(character => {
            if (character.id === id) character.status = !character.status;
            return character;
        }));
    };

    return (
        <main>
            <section>
                <AddButtons
                    toRegisterCharacter={character => setCharacters([...characters, character])}
                    raceItems={raceItems}
                    classItems={classItems}
                    specializationItems={specializationItems}
                />
            </section>
            <section>
                <h2 className="h2 dark:text-white">My Team</h2>
                {specializationItems.map(specialization => 
                    <Team 
                        key={uuidv4()}
                        data={specialization}
                        characters={characters.filter(character => character.specialization === specialization.name)}
                        toDelete={deleteCharacter}
                        toChangeStatus={changeStatus}
                    />
                )}
            </section>
        </main>
    )
};

export default Main;