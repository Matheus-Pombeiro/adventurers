import { useTranslation } from "react-i18next";

import { AiFillCloseCircle } from "react-icons/ai";
import { FaHeartPulse, FaHeartCrack } from "react-icons/fa6";

const Character = ({ character, backgroundColor, toDelete, toChangeStatus }) => {
    const { t } = useTranslation(); // Translator reference

    const changeStatus = () => {
        toChangeStatus(character.id);
    };

    const propsStatusBtn = {
        size: 25,
        className: "btn-animation",
        onClick: changeStatus
    };

    return (
        <div className="w-72 relative">
            <AiFillCloseCircle 
                size={25}
                color="black"
                className="absolute -top-3 -right-3 btn-animation"
                title={t("Delete")}
                onClick={() => toDelete(character.id)}
            />
            <div
                className="bg-white rounded-t-xl"
                style={{ backgroundColor: backgroundColor }}
            >
                <img 
                src={character.image} 
                alt={character.name}
                title={character.name}
                className="w-24 rounded-full relative -bottom-12 left-24 z-10"
                />
            </div>
            <div className="pt-20 pb-8 bg-white drop-shadow-lg rounded-b-xl flex flex-col justify-center items-center">
                <h4 className="mb-2 text-indigo-700 text-lg leading-5 font-bold">{character.name}</h4>
                <h5 className="h5">{character.race}</h5>
                <h5 className="h5">{character.characterClass}</h5>
                <h5 className="h5">{character.specialization}</h5>
                <div className="mt-5">
                    {character.status === true
                        ? <FaHeartPulse 
                            {...propsStatusBtn}
                            color="red"
                            title={t("Alive")}
                        />
                        : <FaHeartCrack 
                            {...propsStatusBtn}
                            color="black"
                            title={t("Dead")}
                        />
                    }
                </div>
            </div>
        </div>
    )
};

export default Character;