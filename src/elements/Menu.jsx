import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../scss/menu.scss';

function Menu() {
  const currentRoute = useLocation().pathname;
  return (
    <nav className="menu navbar navbar-expand-md mb-2">
      <div className="menu__container container-fluid">
        <Link className="logo navbar-brand" to="/index/principal"><img className="img-fluid" src="../images/logoS.png" alt="logo" /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25 12.5C6.25 11.9474 6.46949 11.4175 6.86019 11.0268C7.25089 10.6361 7.7808 10.4166 8.33333 10.4166H41.6667C42.2192 10.4166 42.7491 10.6361 43.1398 11.0268C43.5305 11.4175 43.75 11.9474 43.75 12.5C43.75 13.0525 43.5305 13.5824 43.1398 13.9731C42.7491 14.3638 42.2192 14.5833 41.6667 14.5833H8.33333C7.7808 14.5833 7.25089 14.3638 6.86019 13.9731C6.46949 13.5824 6.25 13.0525 6.25 12.5ZM6.25 37.5C6.25 36.9474 6.46949 36.4175 6.86019 36.0268C7.25089 35.6361 7.7808 35.4166 8.33333 35.4166H41.6667C42.2192 35.4166 42.7491 35.6361 43.1398 36.0268C43.5305 36.4175 43.75 36.9474 43.75 37.5C43.75 38.0525 43.5305 38.5824 43.1398 38.9731C42.7491 39.3638 42.2192 39.5833 41.6667 39.5833H8.33333C7.7808 39.5833 7.25089 39.3638 6.86019 38.9731C6.46949 38.5824 6.25 38.0525 6.25 37.5ZM6.25 25C6.25 24.4474 6.46949 23.9175 6.86019 23.5268C7.25089 23.1361 7.7808 22.9166 8.33333 22.9166H41.6667C42.2192 22.9166 42.7491 23.1361 43.1398 23.5268C43.5305 23.9175 43.75 24.4474 43.75 25C43.75 25.5525 43.5305 26.0824 43.1398 26.4731C42.7491 26.8638 42.2192 27.0833 41.6667 27.0833H21.3792L15.8646 32.6L10.3479 27.0833H8.33333C7.7808 27.0833 7.25089 26.8638 6.86019 26.4731C6.46949 26.0824 6.25 25.5525 6.25 25Z" fill="#2EB872" fillOpacity="0.75" />
          </svg>

        </button>
        <div
          className="menu__container__page offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-2">
              <li className="nav-item">
                <Link to="/index/principal" className={currentRoute.includes('principal') ? 'nav-link active' : 'nav-link'} aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/index/mylikes" className={currentRoute.includes('mylikes') ? 'nav-link active' : 'nav-link'} aria-current="page">My likes</Link>
              </li>
              <li className="nav-item">
                <Link to="/index/gotlikes" className={currentRoute.includes('gotlikes') ? 'nav-link active' : 'nav-link'} aria-current="page">I got liked</Link>
              </li>
              <li className="nav-item">
                <Link to="/index/matches" className={currentRoute.includes('matches') ? 'nav-link active' : 'nav-link'} aria-current="page">Matches</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" onClick={() => { sessionStorage.clear(); }} className="nav-link active text-danger" aria-current="page">Log out</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
