import React from 'react'
import  {Link}  from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg  bg-dark navbar-dark" style={{"fontWeight":'900'}}>
  <div className="container-fluid ">
    <Link className="navbar-brand" to='/'><i class="fa-solid fa-2xl  fa-clapperboard"></i></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to='/contact'>Contact</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
