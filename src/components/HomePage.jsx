import React, {  } from 'react'
import NavBar from './NavBar'
import Fotter from './Fotter'
import { Carousel } from 'react-responsive-carousel';
import GridComponent from './GridComponent';

function HomePage({movie}) {
  

  return (
    <div>
      <NavBar />
      {/* _____________________Section Head____________________ */}
      {/* <div className=' container d-flex'>
        <div className='back flex-fill d-flex align-items-center'>
          <div className='p-5'>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis velit nulla accusamus ratione, corporis omnis architecto, voluptates exercitationem repellat quidem animi, placeat sint minima. Alias illo tenetur cum dolores repellendus perferendis magnam veniam ipsa earum quos recusandae quia minima reiciendis qui sunt quo, architecto in sint aliquid ut! Neque.</p>
            <h4>Rating : star</h4> 
          </div>
        </div>
        <div className=' flex-fill'>
          <img src='https://i.ytimg.com/vi/RbQgF_vocLU/maxresdefault.jpg' className='img' alt="" />
        </div>
      </div>

      <Carousel autoPlay interval={4500} infiniteLoop>
      {movie.slice(0, 5).map((movie) => (
        <div key={movie.imdbID} className='container d-flex'>
        <div className='back flex-fill d-flex align-items-center'>
            <div className='p-5'>
              <h3>{movie.Title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis velit nulla accusamus ratione, corporis omnis architecto, voluptates exercitationem repellat quidem animi, placeat sint minima. Alias illo tenetur cum dolores repellendus perferendis magnam veniam ipsa earum quos recusandae quia minima reiciendis qui sunt quo, architecto in sint aliquid ut! Neque.</p>
            <h4>Rating : star</h4> 
            </div>
          </div>
          <div className='flex-fill'>
            <img src={movie.Poster} className='img' alt={movie.Title} />
          </div>
        </div>
      ))}
    </Carousel> */}
       <Carousel autoPlay interval={4500} infiniteLoop>
    {movie.slice(0, 5).map((movie) => (
    <div className='color '>

        <div className="head ">
            <div className='container set'>
              <div className='gradient-overlay'>

                     <h1> Movie Title</h1>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, repellendus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora numquam possimus odio recusandae tenetur odit aliquid laborum, error inventore illum dolor aut provident sunt fuga aspernatur nostrum maiores enim quod omnis consectetur harum quisquam at cumque! Nemo amet delectus eos quo numquam? Adipisci provident id odio eum, eos rerum magni.</p>
                     <h5>Rating : .....</h5>
                     </div>
                </div>
            <div className='outline'>
                <img src={movie.Poster} className='reSize' alt=""  />
            </div>
    </div>

      
    </div>
     ))}
     </Carousel>


      
      {/* ______________________section Body______________________ */}
       <GridComponent movie={movie} />



      <Fotter />
    </div>
  )
}

export default HomePage
