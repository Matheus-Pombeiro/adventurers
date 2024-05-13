const Character = ({ character, backgroundColor }) => {
    return (
        <div className="w-72 relative">
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
            <div className="pt-20 pb-10 bg-white drop-shadow-lg rounded-b-xl">
                <h4 className="mb-2 text-indigo-700 text-lg leading-5 font-bold">{character.name}</h4>
                <h5 className="h5">{character.race}</h5>
                <h5 className="h5">{character.characterClass}</h5>
                <h5 className="h5">{character.specialization}</h5>
            </div>
        </div>
    )
};

export default Character;