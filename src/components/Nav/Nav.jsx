import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

import './Nav.css';

import '../MyStyles/mystyles.scss'

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div class="navbar" role="navigation" aria-label="main navigation" className="nav">
      
      <div class="navbar-brand">
        <Link to="/home">
          <h2 class="navbar-item" className="nav-title">Pocket Guru</h2>
        </Link>
      </div>

      <div class="navbar-menu">

      <div class="navbar-start">

        <div class="navbar-item">
          <Link className="navLink" to="/about">
              About
          </Link>
        </div>

          <div class="navbar-item">
            <Link className="navLink" to={loginLinkData.path}>
              {loginLinkData.text}
            </Link>
          </div>

          <div class="navbar-item">
            {user.id && (
              <>
                  <Link className="navLink" to="/info">
                    Info Page
                  </Link>
                    <div class="navbar-item">
                      <LogOutButton className="navLink" />
                    </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Nav;
