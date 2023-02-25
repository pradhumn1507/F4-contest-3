import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Search.css'

const Movie = () => {
  const { movieID } = useParams();
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    showSearchResult()
  }, [])

  const showSearchResult = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=4bc4b891&i=${movieID}`);
      setMovieData(response.data);
    } catch (error) {
      console.log("Error: ==> " + error);
    }
  }

  return (
    <div id='movieContainer'>
      <div>
        <img src={movieData.Poster} alt='img' />
      </div>
      <div>Title: {movieData.Title} </div>

      <div id='movieContainerHoriz' >
        <div>Year: {movieData.Year} </div>
        <div>Rated: {movieData.Rated} </div>
        <div>Released: {movieData.Released} </div>
        <div>Runtime: {movieData.Runtime} </div>
      </div>

      <div id='movieContainerHoriz' >
        <div>Genre: {movieData.Genre} </div>
        <div>IMDB Rating: {movieData.imdbRating} </div>
        <div>Country: {movieData.Country} </div>
        <div>Language: {movieData.Language} </div>
      </div>

      <div>Director: {movieData.Director} </div>
      <div>Writer: {movieData.Writer} </div>
      <div>Actors: {movieData.Actors} </div>
    </div>
  )
}

export default Movie