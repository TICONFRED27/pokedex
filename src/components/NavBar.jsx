import { useState } from 'react'

function NavBar({pokemonList}){
   
    const [pokemonIndex , setpokemonIndex] = useState(0);
    const handleNextClick = () => {
        setpokemonIndex(pokemonIndex +1)}
      const handlePrevClick = () => {
        setpokemonIndex(pokemonIndex -1)}
      
    return(
        <>
        <button disabled={pokemonIndex <= 0} onClick={handlePrevClick}>precedent</button>
        <button disabled= {pokemonIndex >= pokemonList.length -1} onClick={handleNextClick}>suivant</button>
        </>)
        
        
        

    
}

export default NavBar