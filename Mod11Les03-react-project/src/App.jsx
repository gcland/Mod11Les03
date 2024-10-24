import { useEffect, useState } from 'react'
import './App.css'
import { ts, apikey, hash } from './keys.jsx' // input user apikey and hash into 'keys.jsx'
import axios from 'axios';
import CharactersList from './CharactersList';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const limit = 10 // SET LIMIT OF PAGE TO RENDER. NOTE: PAGE TAKES SIGNIFICANT TIME TO LOAD PAST LIMIT OF 100 CHARACTERS

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=${limit}&ts=${ts}&apikey=${apikey}&hash=${hash}`);
      setCharacters(response.data.data.results);
      console.log(response.data.data.results)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching character data:', error);
    }
  }
  if(loading) return <h1>Loading {limit} characters. Please wait...</h1>

  return (
    <div>
      <h1>Marvel Characters</h1>
      <CharactersList 
      characters={characters} />
      
    </div>
  )

};

export default App