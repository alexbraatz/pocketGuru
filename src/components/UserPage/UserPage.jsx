import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom'

import Food from '../Food/Food'
import Shopping from '../Shopping/Shopping'
import Savings from '../Savings/Savings'
import Loans from '../Loans/Loans'
import Shelter from '../Shelter/Shelter'
import AddExpenses from '../AddExpenses/AddExpenses'

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

        
          <Link to={ { pathname: '/addexpenses' } }>
            <button>Add new expenses</button>
          </Link>

        <Route >
          <Link to={ { pathname: '/food' } }>
            <Food />
          </Link>
        </Route>

        <Route >
          <Link to={ { pathname: '/shopping' } }>
            <Shopping />
          </Link>
        </Route>

        <Route >
          <Link to={ { pathname: '/savings' } }>
            <Savings />
          </Link>
        </Route>

        <Route >
          <Link to={ { pathname: '/loans' } }>
            <Loans />
          </Link>
        </Route>

        <Route >
          <Link to={ { pathname: '/shelter' } }>
            <Shelter />
          </Link>
        </Route>


      </HashRouter>

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
