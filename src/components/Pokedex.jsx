import React, { useState, useEffect } from 'react'
// El resto de imports

function Pokedex() {
  const [ error, setError ] = useState(false)
  const [ loading, setLoading ] = useState(true)
  
  const [ pokemon, setPokemon ] = useState(null)

  const idPokemon = 11
  // Inicamos con ID random para siempre tener un pokemón
  // const [ pokemonID, setPokemonId ] = useState(idPokemon)

  // Solamente esta cargando mientras hacemos la petición,
  // cuando esta se resuelve o fue un éxito u un error.
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
      .then((response) => response.json())
      .then((data) => {
        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        setPokemon(data)
        setLoading(false)
        setError(false)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
      })

      console.log(pokemon && pokemon)
  }, [])
// Pokedex.js

  return (
    <>
      { error && <div>epa chamo, te equivocaste</div> }

      { 
        loading ? <div>cargando</div> : 
          error === false ? 
          <div>ya cargo</div> : 
          <div>error</div> 
      }
      
      <div>{ pokemon?.name }</div>
      <img src={pokemon?.sprites?.back_default} alt="" />
      <img src={pokemon?.sprites?.front_default} alt="" />
    </>
  )

}

export default Pokedex