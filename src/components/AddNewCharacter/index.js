import { useState } from "react";

import InputText from "../InputText";
import InputRadio from "../InputRadio";
import DropDown from "../DropDown";

const AddNewCharacter = ({ toRegisterCharacter, toggleDialog, raceItems, classItems, specializationItems }) => {
    const [name, setName] = useState("");
    const [race, setRace] = useState("");
    const [characterClass, setCharacterClass] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [status, setStatus] = useState(true);
    
    const toSubmit = (e) => {
        e.preventDefault();
        
        toRegisterCharacter({
            name,
            race,
            characterClass,
            specialization,
            status
        });

        setName("");
        setRace("");
        setCharacterClass("");
        setSpecialization("");
        setStatus(true);

        toggleDialog();
    };

    const inputRadioName = "Status";

    return (
        <form
            className="mb-2 flex flex-col justify-center gap-2.5"
            onSubmit={toSubmit}
        >
            <h2 className="h2">Add a New Character</h2>

            <InputText 
                data={"Name"}
                value={name}
                toChange={value => setName(value)}
            />
            
            <DropDown 
                data={"Race"}
                listItems={raceItems}
                value={race}
                toChange={value => setRace(value)}
            />

            <DropDown 
                data={"Class"}
                listItems={classItems}
                value={characterClass}
                toChange={value => setCharacterClass(value)}
            />

            <DropDown 
                data={"Specialization"}
                listItems={specializationItems}
                value={specialization}
                toChange={value => setSpecialization(value)}
            />

            <div className="space-y-2">
                <label
                    htmlFor="Alive"
                    className="label"
                >
                    Status
                </label>
                <div className="flex gap-4">
                    <InputRadio
                        data={"Alive"}
                        name={inputRadioName}
                        toChange={() => setStatus(true)}
                    />
                    
                    <InputRadio
                        data={"Dead"}
                        name={inputRadioName}
                        toChange={() => setStatus(false)}
                    />
                </div>
            </div>

            <button 
                type="submit"
                className="btn"
            >
                Add Character
            </button>
        </form>
    )
};

export default AddNewCharacter;