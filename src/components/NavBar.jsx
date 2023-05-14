import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
       {/* ______________________NAV BAR__________________________________________ */}
    <div className='navbar'>
      <nav className='container-md d-flex align-items-center'>
        <div>
            <h1>Movies Rating</h1>
        </div>

        <div className=" d-flex align-items-center">
          <input type="text" placeholder="Search..." className='search-input ms-5 ps-3' />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search  search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg> 
            <ul className='d-flex justify-content-around '>
                <li><Link to='/'>Home</Link></li>
                <li><a href="/">Movies</a></li>
                <li><a href="/">Languages</a></li>
                <li><a href="/">Shows</a></li>
                <li><a href="/">Login/SignUp</a></li>
            </ul>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default NavBar
