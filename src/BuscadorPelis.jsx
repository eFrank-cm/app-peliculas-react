import React, { useState } from 'react'
import {api_key} from '../api-key.json'

export const BuscadorPelis = () => {
  const urlBase = 'https://api.themoviedb.org/3/search/movie'
  const API_KEY = api_key

  const [busqueda, setBusqueda] = useState('')
  const [peliculas, setPeliculas] = useState([])


  const handleInputChange = (event) => {
    setBusqueda(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchPeliculas()
  }

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
      const data = await response.json()
      setPeliculas(data.results)

    } catch (error) {
      console.log('Ocurrio un error: ', error)
    }
  }

  return (
    <div className='container'>
      <h1 className='title'>Buscador de Peliculas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Escribir una pelicula'
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type='submit' className='search-button'>Buscar</button>
      </form>
      <div className='movie-list'>
        {peliculas.map((peli) => (
          <div key={peli.id} className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`} alt={peli.title} />
            <h2>{peli.title}</h2>
            <h3>{peli.adult  && 'si' }</h3>
            <p>{peli.overview}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
