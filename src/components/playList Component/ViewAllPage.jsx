import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
import Fotter from '../Fotter'

function ViewAllPage({movie}) {
  return (
    <>
    <NavBar />
    <div className='container'>
          <div class="row">
                  {
                    movie.map((list) => {
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
    <Fotter />
</>
  )
}

export default ViewAllPage
