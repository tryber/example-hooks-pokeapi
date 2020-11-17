import { useState, useEffect } from 'react';

const useAbility = () => {
  const [pokeUrl, setPokeUrl] = useState('');
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  useEffect(()=>{

    async function fetchAbility(){
      if (pokeUrl !== '') {
        console.log(pokeUrl);
        const results = await fetch(pokeUrl)
        .then((response) => response.json())
        .then((data) => data.abilities);
        
        const abilities = results.map(({ ability }) => ability.name);
        console.log(abilities);
        setPokemonAbilities(abilities);
      }
    }
    fetchAbility();
    
  }, [pokeUrl]);

  return [pokemonAbilities, setPokeUrl];
};

export default useAbility;
