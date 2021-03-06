import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch,useSelector} from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom'

import Food from '../Food/Food'
import Shopping from '../Shopping/Shopping'
import Savings from '../Savings/Savings'
import Loans from '../Loans/Loans'
import Shelter from '../Shelter/Shelter'

import Capitalize from '../Capitalize/Capitalize'

import '../MyStyles/mystyles.scss'

function UserPage() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({ type: 'FETCH_EXPENSES' });
  }, []);
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  let guruUser;
  
  // allows us to initalize a variable w/username w/o errors if no one is logged in
  user ? guruUser = user.username : ""

  return (
    <div className="container">
      <h2 class="title">Welcome to Pocket Guru, { Capitalize(guruUser) }!</h2>
    
      <HashRouter>

        
          <Link to={ { pathname: '/addexpenses' } }>
            <button class="button is-large is-link">Add new expenses</button>
          </Link>

        <section class="section">
          <Route >
            <Link to={ { pathname: '/food' } }>
              <div class="column is mobile">
                <Food /><br />
              </div>
            </Link>
          </Route>
        </section>

        <section class="section">
          <Route >
            <Link to={ { pathname: '/shopping' } }>
              <div class="column is mobile">
              <Shopping /><br />
              </div>
            </Link>
          </Route>
        </section>

        <section class="section">
          <Route >
            <Link to={ { pathname: '/savings' } }>
              <Savings /><br />
            </Link>
          </Route>
        </section>

        <section class="section">
        <Route >
          <Link to={ { pathname: '/loans' } }>
            <Loans /><br />
          </Link>
        </Route>
        </section>

        <section class="section">
        <Route >
          <Link to={ { pathname: '/shelter' } }>
            <Shelter /><br />
          </Link>
        </Route>
        </section>

      </HashRouter>
      <br />
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
