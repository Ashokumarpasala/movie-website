import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar';
import Fotter from './Fotter'
import { useLocation } from 'react-router-dom';

function SingleMovieDetails({movie}) {
  //console.log('movie', movie);
  //const [data, setData] = useState()
  const location = useLocation();
  //console.log('location',location.state.title);
  // console.log('movie', movie)
    const [moviesData, setMoviesData] = useState({})
//     console.log(moviesData);
      const {Actors} = moviesData;
      const names = typeof Actors === 'string' ? Actors.split(', ') : [];
          
      const finalData = movie.find(item=> {
        if(item.Title == location.state.title){
        return item
        }
      })

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://www.omdbapi.com/?i=${finalData.imdbID}&apikey=fbed85d0`
            );
          setMoviesData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

    // console.log('finaldata', moviesData)
    // console.log('final data', finalData.DVD)



//console.log('finalData',finalData.Poster);

  return (
    <>
     <NavBar />

    {/* ___________________BODY______________________________________________________ */}
    <div className="card mb-3 container mt-5" >
      <div className="row g-0">

        <div className="col-md-4">
          
          <img src={finalData.Poster} className="img-fluid rounded-start" alt="..."/>
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">Movie Title : {finalData.Title}</h3>
            <p className="card-text d-flex justify-content-between">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
                  <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>{'  '}
                Release Date : {'  '}
              { moviesData.DVD}
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
              </svg>{'  '}
              Duration : {'  '}
              {moviesData.Runtime}
              </div>
              </p>
              <p className='card-text'>{moviesData.Plot}</p>
              <p className='card-text'>Gener : {moviesData.Genre}</p>
              <p className='card-text'>Director :{moviesData.Director}</p>
              <p className='card-text'>Stars: {moviesData.Actors}</p>
              <p className='card-text'>Writers :{moviesData.Writer}</p>
              <p className='card-text'></p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>


    <div className='container card'>
      <img src={moviesData.Poster} className='img' alt="" />
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-play-circle play" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
      </svg>
    </div>

    <div className="card container mt-5">
      <div className="card-body">
        <h5 className="card-title">Special Title treatment</h5>
        <h6 className='card-title mt-4'>MoviesData Synapsis</h6>
        <p className="card-text">{moviesData.Plot}</p>
        <h6 className='card-title mt-4'>cast & Crew</h6>
        <div className="d-flex justify-content-around">  
         {names.map(name=>{
            return (
              <div key={name}>
              <img src={moviesData.Poster} className="roundImg" alt="..."/>
              <p>{name}</p> 
            </div>
          )})}      

        </div>
      </div>
    </div>

    <Fotter />
    </>
  )
}

export default SingleMovieDetails
