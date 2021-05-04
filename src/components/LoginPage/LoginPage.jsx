import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import '../MyStyles/mystyles.scss'

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <section class="section-padding">
        <LoginForm /><br />
      </section>

        <section class="section-padding">
          <h4 class="subtitle">Need to Register?</h4>

          <button
            class="button"
            type="button"
            // className="btn btn_asLink"
            onClick={() => {
              history.push('/registration');
            }}
          >
            Register
          </button>

        </section>

    </div>
  );
}

export default LoginPage;
