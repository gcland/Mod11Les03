import CharacterDetail from './CharacterDetail.jsx';

const CharactersList = ({ characters }) => {

    return (
        <div id="grid-container">
            <h3>Characters</h3>
            <ul id="characterList">
                {characters.map(character => (
                    <div id="characterItem">
                    <li key={character.id}>
                        <div id="charName">{character.name}</div>
                    </li>
                        <CharacterDetail id={character.id} /> 
                    
                    </div>

                ))}
            </ul>
        </div>
    )
}
export default CharactersList