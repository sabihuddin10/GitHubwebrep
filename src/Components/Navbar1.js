import React from 'react';
import styles from './Navbar1.css';
import { Link } from 'react-router-dom';
export default function Navbar1(props) {
  const [lightmode, setlightmode] = React.useState(false);
  const togglelightmode = (event)=>{
    event.preventDefault();
    setlightmode(!lightmode);
    document.body.classList.toggle('dark');
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={{pathname: '/'}}>{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={
                  {pathname: '/'}
                }>{props.home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={{pathname: '/about'}}>{props.link}</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {props.dropdown}
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={{pathname: '/contact'}}>Contact Us</Link></li>
                  <li><Link className="dropdown-item" to={{pathname: '/careers'}}>Careers</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to={{pathname: '/visitus'}}>Visit Our Headquarters</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="nav-mainbtns btn btn-outline-success" type="submit">Search</button>
              <button className="nav-mainbtns btn btn-outline-success mx-2" onClick={togglelightmode} >{lightmode ? "Light":"Dark"}</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar1.defaultProps = {
  title:"myapp1",
  home:"Home",
  link:"Link",
  dropdown:"More"
} 