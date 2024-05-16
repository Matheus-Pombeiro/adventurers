import { v4 as uuidv4 } from 'uuid';

import Character from "../Character";

const Team = ({ data, characters, toDelete, toChangeStatus }) => {
    return (
        characters.length > 0 && 
            <section
                className='text-center p-8 bg-blend-multiply relative'
                style={{ backgroundImage: "url(/assets/teams-background.png)"}}
            >
                <h3 
                    className='text-3xl border-b-4 border-solid inline-block pb-2'
                    style={{ borderColor: data.color }}
                >{data.name}</h3>
                <div className='flex justify-around mt-8 flex-wrap gap-4'>
                    {characters.map(character =>
                        <Character 
                            key={uuidv4()}
                            character={character}
                            backgroundColor={data.color}
                            toDelete={toDelete}
                            toChangeStatus={toChangeStatus}
                        />
                    )}
                </div>
            </section>
    )
};

export default Team;