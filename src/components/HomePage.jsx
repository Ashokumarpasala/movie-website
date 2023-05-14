import React, {  } from 'react'
import NavBar from './NavBar'
import Fotter from './Fotter'
import { Carousel } from 'react-responsive-carousel';
import GridComponent from './GridComponent';
import starfill from '../images/starfill.svg'

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
        <div className='color'>
       <Carousel autoPlay interval={2000} infiniteLoop>

          {movie.slice(0, 5).map((movie) => (
            <div className='container'>
              <div className="head ">
                  <div className='gradient-overlay '>
                    <div className=' pt-5 mt-5'>
                      <div className='d-flex align-items-start flex-column mb-3 p-5 '>

                      <h1 className='mb-3'>{movie.Title}</h1>
                       <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. doloribus remrepellendus sapiente exercitationem culpa, laborum, assumenda pariatur architecto accusamus? Sunt quidem sit provident quas porro asperiores quod distinctio beatae, impedit temporibus optio ut. Dolor ab ex optio ullam in culpa aperiam quae perferendis neque modi. Voluptate?s</p>
                      <h4 className='d-flex'>Rating : 
                        <span>
                           <img src={starfill} alt="" />
                        </span>
                      </h4>
                      </div>
                    </div>
                  </div>
                  <div className='reSize'>
                  <img src={movie.Poster} alt="" />
                  </div>
          </div>
     </div>
     ))}
     </Carousel>
     </div>


      
      {/* ______________________section Body______________________ */}
       <GridComponent movie={movie} />



      <Fotter />
    </div>
  )
}

export default HomePage
