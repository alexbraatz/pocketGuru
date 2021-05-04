import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

import '../MyStyles/mystyles.scss'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form class="container" className="formPanel" onSubmit={login}>

      <h2 class="title ">Login</h2>

      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}

      <div class="tile is-parent">
        <div class="field">
          <label class="label">Username:</label>
          <div class="control has-icons-left">
              <input
                class="input"
                type="text"
                placeholder="Username"
                autoComplete="username"
                name="username"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <span class="icon is-small is-left">
                <i class="fa fa-home"></i>
              </span>
              </div>
        </div>
      </div>
      
      <div class="tile is-parent">
      <div class="field">
        <label class="label" htmlFor="password">Password:</label>
          <div class="control has-icons-left">
            <input
              class="input"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
      </div>
      </div>

      <div>
        <br />
        <input class="button" type="submit" name="submit" value="Log In" />
      </div>
    </form>
  );
}

export default LoginForm;
