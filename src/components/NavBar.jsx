import React from 'react'
import { Link } from 'react-router-dom'
import search from '../images/search.svg'

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
          {/* <input type="text" placeholder="Search..." className='search-input ms-5 ps-3 rounded-pill' /> */}
          <div class="input-group mb-3">
          <input type="text" class="form-control" style={{ borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px'}} placeholder="Search Movie" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <img src={search} alt='' style={{backgroundColor: '#92B5E0', padding: '10px', borderTopRightRadius: '25px', borderBottomRightRadius: '25px'}}/>
        </div>
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
