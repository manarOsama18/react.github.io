import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div class="d-flex  flex-row align-items-center p-3 
    px-4 mb-3 bg-white border-bottom border-primary">
  <h5 class="my-0 mr-auto font-weight-normal">Company name</h5>
  <nav class="my-2  mr-3">
    <Link classname="p-2 text-dark" to="/">Home</Link>
    <Link classname="p-2 text-dark" to="/About">about</Link>
   
  </nav>
  <a class="btn btn-outline-primary" href="#">Sign up</a>
</div>
  )
}

export default Navbar