import { useState } from "react";

import { useTranslation } from "react-i18next";

import { v4 as uuidv4 } from 'uuid';

import InputText from "../InputText";
import InputRadio from "../InputRadio";
import DropDown from "../DropDown";

const AddNewCharacter = ({ toRegisterCharacter, toggleDialog, raceItems, classItems, specializationItems }) => {
    // Declare the states that contain the values inserted by the user when they are adding a new character
    const [name, setName] = useState("");
    const [race, setRace] = useState("");
    const [characterClass, setCharacterClass] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [image, setImage] = useState("");
    const [status, setStatus] = useState(true);

    const { t } = useTranslation(); // Translator reference
    
    // Declare a function that registers the new character
    const toSubmit = (e) => {
        e.preventDefault();     // Prevents the form's automatic behavior
        
        // Send the character data to the above component
        toRegisterCharacter({
            id: uuidv4(),
            name,
            race,
            characterClass,
            specialization,
            image,
            status
        });

        // Restore the state's values to their initial values
        setName("");
        setRace("");
        setCharacterClass("");
        setSpecialization("");
        setImage("");
        setStatus(true);

        toggleDialog();     // Close the modal
    };

    const inputRadioName = "Status";    // Declare a const that contains the default value for the input's name

    return (
        <form
            className="form"
            onSubmit={toSubmit}
        >
        <h2 className="h2">{t("Add New Character")}</h2>

            <InputText 
                data={t("Name")}
                required={true}
                value={name}
                toChange={value => setName(value)}
            />
            
            <DropDown 
                data={t("Race")}
                listItems={raceItems}
                required={true}
                value={race}
                toChange={value => setRace(value)}
            />

            <DropDown 
                data={t("Class")}
                listItems={classItems}
                required={true}
                value={characterClass}
                toChange={value => setCharacterClass(value)}
            />

            <DropDown 
                data={t("Specialization")}
                listItems={specializationItems}
                required={true}
                value={specialization}
                toChange={value => setSpecialization(value)}
            />

            <InputText 
                data={t("Image")}
                required={false}
                value={image}
                toChange={value => setImage(value)}
            />

            <div className="space-y-2">
                <label
                    htmlFor="Alive"
                    className="label"
                >
                    {t("Status")}
                </label>
                <div className="flex gap-4">
                    <InputRadio
                        data={t("Alive")}
                        name={inputRadioName}
                        value={true}
                        toChange={value => setStatus(value)}
                    />
                    
                    <InputRadio
                        data={t("Dead")}
                        name={inputRadioName}
                        value={false}
                        toChange={value => setStatus(value)}
                    />
                </div>
            </div>

            <button 
                type="submit"
                className="btn"
            >
                {t("Add Character")}
            </button>
        </form>
    )
};

export default AddNewCharacter;