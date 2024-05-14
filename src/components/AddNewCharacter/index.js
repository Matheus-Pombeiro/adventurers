import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import InputText from "../InputText";
import InputRadio from "../InputRadio";
import DropDown from "../DropDown";

const AddNewCharacter = ({ toRegisterCharacter, toggleDialog, raceItems, classItems, specializationItems }) => {
    const [name, setName] = useState("");
    const [race, setRace] = useState("");
    const [characterClass, setCharacterClass] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [image, setImage] = useState("");
    const [status, setStatus] = useState(true);
    
    const toSubmit = (e) => {
        e.preventDefault();
        
        toRegisterCharacter({
            id: uuidv4(),
            name,
            race,
            characterClass,
            specialization,
            image,
            status
        });

        setName("");
        setRace("");
        setCharacterClass("");
        setSpecialization("");
        setImage("");
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
                required={true}
                value={name}
                toChange={value => setName(value)}
            />
            
            <DropDown 
                data={"Race"}
                listItems={raceItems}
                required={true}
                value={race}
                toChange={value => setRace(value)}
            />

            <DropDown 
                data={"Class"}
                listItems={classItems}
                required={true}
                value={characterClass}
                toChange={value => setCharacterClass(value)}
            />

            <DropDown 
                data={"Specialization"}
                listItems={specializationItems}
                required={true}
                value={specialization}
                toChange={value => setSpecialization(value)}
            />

            <InputText 
                data={"Image"}
                required={false}
                value={image}
                toChange={value => setImage(value)}
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