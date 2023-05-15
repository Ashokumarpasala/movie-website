import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SingleMovieDetails from './components/SingleMovieDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import axios, { all } from 'axios'
import ViewAllPage from './components/playList Component/ViewAllPage';

function App() {
  const [movies, setMovies] = useState([])
  


  console.log('object, movies', movies)
  
 
  
  useEffect(() => {
 


    const fetchMovies = async () => {
      try {
        const resp1 = await axios.get(
          'http://www.omdbapi.com/?apikey=fbed85d0&s=action'
        );
        const resp2 = await axios.get(
          'http://www.omdbapi.com/?apikey=fbed85d0&s=comedy'
        );
        const resp3 = await axios.get(
          'http://www.omdbapi.com/?apikey=fbed85d0&s=animation'
          );
        const resp4 = await axios.get(
          'http://www.omdbapi.com/?apikey=fbed85d0&s=drama'
            );
        const resp5 = await axios.get(
          'http://www.omdbapi.com/?apikey=fbed85d0&s=sci-fi'
        );
        const resp6 = await axios.get(
          'http://www.omdbapi.com/?apikey=fbed85d0&s=adventure'
        );
          
        
        // const allMovie = [resp1.data.Search, resp2.data.Search, resp3.data.Search, resp4.data.Search, resp5.data.Search];
        // console.log('only objects', allMovie)

        const allMovies = [...resp1.data.Search, ...resp2.data.Search, ...resp3.data.Search, ...resp4.data.Search, ...resp5.data.Search, ...resp6.data.Search];
            setMovies(allMovies);
          } catch (error) {
            console.error(error);
          }
        };
        
        fetchMovies();
      }, []);
  


  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/'  element={<HomePage movie={movies} />}/>
        <Route exact path='/moviePage' element={<SingleMovieDetails movie={movies}/>}/>
        <Route exact path='/viewAllPage' element={<ViewAllPage movie={movies} />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
