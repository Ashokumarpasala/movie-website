import React from 'react'
import { Link } from 'react-router-dom'

function GridComponent({movie}) {
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
                                            <p className='card-text rating'>Rating : Stars</p>
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
            <div className='box card'>two</div>
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
                                            <p className='card-text rating'>Rating : Stars</p>
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
                                            <p className='card-text rating'>Rating : Stars</p>
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
                                            <p className='card-text rating'>Rating : Stars</p>
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
            <div className='box card'>seven</div>
    </div>
    </>
  )
}

export default GridComponent
