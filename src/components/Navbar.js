import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/">{props.aboutUs}</a> */}
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/">{props.contactUs}</a> */}
              <a className="nav-link" href="/">Contact Us</a>
            </li>


          </ul>
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
          <div className={`p-3 mx-1 mb-2 bg-${props.greenMode === "blue" ? "success" : "primary"}`} onClick={props.greenmode}></div>
          <div className={`p-3 mx-1 mb-2 bg-${props.redMode === "yellow" ? "danger" : "warning"}`} onClick={props.redmode}></div>
        <div className={`p-3 mx-1 mb-2  bg-${props.mode === "dark" ? "white" : "dark"}`} onClick={props.toggleMode}></div>
        </div>
      </div>
    </nav>
  )
}
