import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function NowPlaying({movie}) {
  return (
    <Carousel autoPlay interval={4500} infiniteLoop>
    {movie.slice(0, 5).map((movie) => (
    <div className=' container d-flex'>
    <div className='back flex-fill d-flex align-items-center'>
      <div className='p-5'>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis velit nulla accusamus ratione, corporis omnis architecto, voluptates exercitationem repellat quidem animi, placeat sint minima. Alias illo tenetur cum dolores repellendus perferendis magnam veniam ipsa earum quos recusandae quia minima reiciendis qui sunt quo, architecto in sint aliquid ut! Neque.</p>
        <h4>Rating : star</h4> 
      </div>
    </div>
    <div className=' flex-fill'>
      <img src='https://i.ytimg.com/vi/RbQgF_vocLU/maxresdefault.jpg' className='reSize' alt="" />
    </div>

      
    </div>
     ))}
     </Carousel>
  )
}

export default NowPlaying
