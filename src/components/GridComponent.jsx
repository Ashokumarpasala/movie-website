import React from 'react'
import article from '../images/article.svg'
import ShowCase from './grid components/ShowCase';

function GridComponent({movie}) {
  // console.log('grid', movie)
  const actionMovies = movie.slice(0, 15);
  const comdeyMovies = movie.slice(16, 30);
  const animationMovies = movie.slice(31, 48);
  const scifiMovies = movie.slice(49, 60);

  return (

    <>
    
    <div class="wrapper container">
           
           <ShowCase movie={actionMovies} name='NowPlaying' />

            <div className='box card'>
                <h4 className='mb-3 ' style={{  borderBottom: '0.5px solid rgba(94, 95, 97, 0.4)'}}>Movie Article</h4>
                <img src={article} alt="" />
                <p className='mt-3'>
                on this page that ...
                  Jr NTR, Ram Charan's 'RRR' tops IMDB's list of most popular Indian Movies in 2022; 'Major', 'Sita Ramam' secure 7th and 8...
                  Lorem ipsum dolor sit amet, consectetur
                  Jr NTR, Ram Charan's 'RRR' tops IMDB's list of most popular Indian Movies in 2022; 'Major', 'Sita Ramam' secure 7th and 8...
                  Lorem ipsum dolor sit amet, consecteturJr NTR,
                </p>
            </div>


            <ShowCase movie={comdeyMovies} name='Most Popular Movies'/>
            <div className='box card cover'>four</div>
            <ShowCase movie={animationMovies} name='Animation Movies'/>
            <ShowCase movie={scifiMovies} name='Most view Dramas'/>

           
            <div className='box card'>
              <h5>Links to movie review page</h5>
              <p><a href="">Review : Ori Devuda – Decent rom-com</a></p>
              <p><a href="">Review : Ori Devuda – Decent rom-com</a></p>
              <p><a href="">Review : Ori Devuda – Decent rom-com</a></p>
              <p><a href="">Review : Ori Devuda – Decent rom-com</a></p>
              <p><a href="">Review : Ori Devuda – Decent rom-com</a></p>
              <p><a href="">Review : Ori Devuda – Decent rom-com</a></p>
              <p><a href="">Review : Ori Devuda – Decent rom-com</a></p>
            </div>
    </div>
    </>
  )
}

export default GridComponent
