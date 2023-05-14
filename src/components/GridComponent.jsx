import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import star from '../images/star.svg'
import article from '../images/article.svg'

function GridComponent({movie}) {
  const navigate = useNavigate();
  const imgClick = (title) => {
//console.log(title);
navigate('/moviePage',{state:{title}})
  } 

  return (

    <>
    
    <div class="wrapper container">
            <div className='box card'>
            <div className='d-flex justify-content-between  p-3'>
            <h2 className='card-text'>Now Playing</h2>
            <h3 className='card-text'><Link to='/viewAllPage'>View All</Link></h3>
            </div>
            <div class="row">
                  {
                          movie.slice(0, 3).map((list) => {
                            return (
                        <>   
                          <div class="col-3 col-sm-4 ">
                                          <div class="card">
                                          <div class="card-body">
                                            <p className='d-flex rating'>Rating : <img src={star} alt="" /></p>
                                            {/* <Link to='/moviePage'> */}
                                            <img src={list.Poster} class="card-img-top" alt="..." onClick={()=>imgClick(list.Title)}/>
                                            {/* </Link>                                            <h5 class="card-title text-center mt-4">{list.Title}</h5> */}
                                          </div>
                                      </div>
                          </div>
                        </>

                      )
                    })
                  }
                </div>
            </div>


            <div className='box card'>
                <h4 className='mb-3'>Movie Article</h4>
                <img src={article} alt="" />
                <p className='mt-3'>
                on this page that ...
                  Jr NTR, Ram Charan's 'RRR' tops IMDB's list of most popular Indian Movies in 2022; 'Major', 'Sita Ramam' secure 7th and 8...
                  Lorem ipsum dolor sit amet, consectetur
                  Jr NTR, Ram Charan's 'RRR' tops IMDB's list of most popular Indian Movies in 2022; 'Major', 'Sita Ramam' secure 7th and 8...
                  Lorem ipsum dolor sit amet, consecteturJr NTR,
                </p>
            </div>


            <div className='box card'>
            <div className='d-flex justify-content-between  p-3'>
            <h2 className='card-text'>Web Series</h2>
            <h3 className='card-text'><Link to='/viewAllPage'>View All</Link></h3>
            </div>
            <div class="row">
                  {
                          movie.slice(11, 14).map((list) => {
                            return (
                        <>   
                          <div class="col-3 col-sm-4 ">
                                          <div class="card">
                                          <div class="card-body">
                                          <p className='d-flex rating'>Rating : <img src={star} alt="" /></p>
                                            <Link to='/moviePage'>
                                            <img src={list.Poster} class="card-img-top" alt="..."/>
                                            </Link>
                                            <h5 class="card-title text-center mt-4">{list.Title}</h5>
                                          </div>
                                      </div>
                          </div>
                        </>

                      )
                    })
                  }
                </div>
            </div>
            <div className='box card cover'>four</div>
            <div className='box card'>
            <div className='d-flex justify-content-between  p-3'>
            <h2 className='card-text'>UP Coming Movies</h2>
            <h3 className='card-text'><Link to='/viewAllPage'>View All</Link></h3>
            </div>
            <div class="row">
                  {
                          movie.slice(21, 24).map((list) => {
                            return (
                        <>   
                          <div class="col-3 col-sm-4 ">
                                          <div class="card ">
                                          <div class="card-body">
                                          <p className='d-flex rating'>Rating : <img src={star} alt="" /></p>
                                            <Link to='/moviePage'>
                                            <img src={list.Poster} class="card-img-top" alt="..."/>
                                            </Link>                                            <h5 class="card-title text-center mt-4">{list.Title}</h5>
                                          </div>
                                      </div>
                          </div>
                        </>

                      )
                    })
                  }
                </div>
            </div>
            <div className='box card'>
            <div className='d-flex justify-content-between  p-3'>
            <h2 className='card-text'>Most Popular Movies</h2>
            <h3 className='card-text'><Link to='/viewAllPage'>View All</Link></h3>
            </div>
            <div class="row">
                  {
                          movie.slice(16, 19).map((list) => {
                            return (
                        <>   
                          <div class="col-3 col-sm-4 ">
                                          <div class="card">
                                          <div class="card-body">
                                          <p className='d-flex rating'>Rating : <img src={star} alt="" /></p>
                                            <Link to='/moviePage'>
                                            <img src={list.Poster} class="card-img-top" alt="..."/>
                                            </Link>                                            <h5 class="card-title text-center mt-4">{list.Title}</h5>
                                          </div>
                                      </div>
                          </div>
                        </>

                      )
                    })
                  }
                </div>
            </div>
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
