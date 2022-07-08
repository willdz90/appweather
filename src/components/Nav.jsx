import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
          <Link to='/'>
              <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          </Link>
          <span className="navbar-brand">
            Henry - Weather App
          </span>

          <Link to='/about'> About </Link>

        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
