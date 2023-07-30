import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import  {BrowserRouter as Router1,Link } from 'react-router-dom';


export default function Navbar1(props) {
     
        return(
          <>
          <Router1>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode1} `} style={{backgroundColor: props.mode1==='dark'?'#434343':'#98DFD6'}}>
  <Link className="navbar-brand" href="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mx-3">
      <li className="nav-item active mx-2">
        <Link className="nav-link" to="/" style={{color:props.mode1==='light'?'black':'white',alignItems:"center"}}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item mx-2">
        <Link className="nav-link" to="/about"  style={{color:props.mode1==='light'?'black':'white'}}>{props.aboutText}</Link>
      </li>
      <li className="nav- mx-2">
        <Link className="nav-link" to="/contact" style={{color:props.mode1==='light'?'black':'white'}}>{props.contactText}</Link>
      </li>
    </ul>
  </div>
 
  <div className={`form-check form-switch text-${props.mode1==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" id="mySwitch" name="darkmode"  onClick={props.toggleMode} />
  <label className="form-check-label" htmlFor="mySwitch">{props.text2}</label>
</div>
</nav>
</Router1>


            </>

        );
     
}

