import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom'

import Food from '../Food/Food'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  let guruUser;
  
  // allows us to initalize a variable w/username w/o errors if no one is logged in
  user ? guruUser = user.username : ""

  const capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  return (
    <div className="container">
      <h2>Welcome to Pocket Guru, { capitalize(guruUser) }!</h2>
      <p>Your ID is: {user.id}</p>
      <HashRouter>
        <Route>
          <Food />
        </Route>


      </HashRouter>

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
