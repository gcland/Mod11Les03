import axios from 'axios';
import { ts, apikey, hash } from './keys.jsx' // input user apikey and hash into 'keys.jsx'
import React, { useEffect, useState } from 'react';

const CharacterDetail = ({ id }) => {
    const [characterIdShow, setCharacterIdShow] = useState(false); // boolean to toggle show / hide character Id details item
    const [characterID, setCharacterID] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        displayDetail(id);
      }, []);

    const displayDetail = async (id) => {
        try {
            const charResponse = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`);
            setCharacterID(charResponse.data.data.results[0]);
            console.log(`Char ${id}:`, charResponse.data.data.results[0])
            setLoading(false);
        } catch (error) {
                console.error(`Error fetching character ${id} data:`, error);
        }}
        
    const toggleCharDetailHidden = () => {
        setCharacterIdShow(false);
    }
    
    const toggleCharDetailView = () => {
        setCharacterIdShow(true);
    }

    if(loading) return <h1>Loading...</h1>
    if (characterID.description == "") {
        characterID.description = "No description available"
    }
    if (characterID.comics.available == 0) {
        let obj = [{name: "No comics available"}]
        characterID.comics.items = (obj)
        characterID.comics.available = 1
    }
    return (
        <div>
        {characterIdShow ? (
            <div>
                <img src={(characterID.thumbnail.path)+"."+(characterID.thumbnail.extension)} onClick={(toggleCharDetailHidden)}alt={" Img"} width="300px"height="300px"></img>
                <div id="charID">(ID: {characterID.id})</div>
                <div id="descTitle">Description: </div>
                <p id="desc"> {characterID.description} </p>
                <div id="comicTitle">Comics: </div>
                    <ul>
                        {characterID.comics.items.map(item => (
                            <li>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
        ) : (
            <div>
                <img src={(characterID.thumbnail.path)+"."+(characterID.thumbnail.extension)} onClick={toggleCharDetailView} alt={" Img"} width="300px"height="300px"></img>

            </div>
        )
        }
        </div>
    )
    
}


export default CharacterDetail

//<div>
        // {characterIdShow ? (
        //     <div>
        //         <img src={(characterID.thumbnail.path)+"."+(characterID.thumbnail.extension)} onClick={(toggleCharDetailHidden, displayDetail)}alt={" Img"} width="300px"height="300px"></img>
        //         {/* <div id="charID">(ID: {characterID.id})</div> */}
        //         <div id="descTitle">Description: </div>
        //         {/* <p id="desc"> {characterID.description} </p> */}
        //         <div id="comicTitle">Comics: </div>
        //     </div>
        // ) : (
        //     <div>
        //         <img src={(characterID.thumbnail.path)+"."+(characterID.thumbnail.extension)} onClick={toggleCharDetailView} alt={" Img"} width="300px"height="300px"></img>

        //     </div>
        // )
        // }
//</div>