import React from 'react'
import { useNavigate } from 'react-router-dom'
import star from '../../images/star.svg'


function ShowCase({movie, name}) {

  
  // console.log('showcase', movie)
    const navigate = useNavigate();
    const imgClick = (title) => {
    //console.log(title);
    navigate('/moviePage',{state:{title}})
    } 

    const handleViewAll = (movie) =>{navigate('/viewAllpage', {state:{movie}})}

  return (
    <div>
       <div className='box card'>
            <div className='d-flex justify-content-between  p-3'>
            <h2 className='card-text'>{name}</h2>
            <h3 className='card-text' style={{cursor:'pointer'}} onClick={() => handleViewAll(movie)}>View All</h3>
            </div>
            <div class="row">
                  {
                          movie.slice(0, 3).map((list) => {
                            return (
                        <>   
                          <div class="col-3 col-sm-4 "  >
                                          <div class="card" >
                                          <div class="card-body" >
                                            <p className='d-flex rating'>Rating : <img src={star} alt="" /></p>
                                            <img src={list.Poster} class="card-img-top" alt="..." onClick={()=>imgClick(list.Title)}/>
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
    </div>
  )
}

export default ShowCase
