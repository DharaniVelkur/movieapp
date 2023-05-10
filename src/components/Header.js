import React from 'react'
import  {Link}  from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg  bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Movies app</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/movies/popular'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/movies/top_rated'>About</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to='/movies/upcoming'>Contact</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
