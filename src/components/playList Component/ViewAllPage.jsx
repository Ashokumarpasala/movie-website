import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavBar from '../NavBar'
import Fotter from '../Fotter'
import star from '../../images/star.svg'

function ViewAllPage() {

  const location = useLocation()
  const {movie} = location.state

  console.log('viewllpage', movie)
  const[currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(movie.length / itemsPerPage)
  const displayItem = 6

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + displayItem

  const items = movie.slice(startIndex, endIndex)
  const pageNum = []
  for (let i = 1; i <= totalPages; i++) {
      pageNum.push(i)
  }

  const handleClick = (num) => {
      setCurrentPage(num)
  }
  return (
    <>
    <NavBar />
    <div className=' container wrapper mt-5 '>
      <div className=' gride '>
      <div class="row">
            
            {
              items.map((list) => {
                      return (
                        <>   
                    <div class="col-3 col-sm-4 ">
                                    <div class="card">
                                    <div class="card-body">
                                      <p className='card-text rating'>Rating : <img src={star} alt="" /></p>
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
      <div className=' card'>
        Two
      </div>
      <div className='card  '>
      <div className='box '>
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
    </div>
    
  
    <div className='container'>
        <ul className='pagination m-5'>
                        {
                          pageNum.map((num) => {
                            return  <li className={`page-item ${currentPage === num ? 'active' : ''}`} key={num}>
                                        <a className='page-link' href='#' onClick={() => handleClick(num)}style={{ width: '3.5rem', height: '3.5rem', textAlign: 'center' }} >
                                           {num} 
                                        </a>
                                     </li>})
                          }
            </ul>
      </div>

    <Fotter />
</>
  )
}

export default ViewAllPage
