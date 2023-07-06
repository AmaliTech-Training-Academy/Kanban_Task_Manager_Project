import * as React from 'react'
import { StyledRegistrationForm } from './styles'


export const RegistrationForm = () => {
  return (
    <StyledRegistrationForm>
      <div>
        <form action="/submit-form" method="POST">
          <div className="grid">
            <div className="form1">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="e.g. Salami Joseph"
              ></input>
            </div>

            <div className="form1">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="fullname"
                placeholder="************"
              ></input>
            </div>
          </div>

          <div className="grid">
            <div className="form1">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="e.g theresah@kanban.com"
              ></input>
            </div>

            <div className="form1">
              <label htmlFor="confirm">Comfirm Password</label>
              <input
                type="text"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="***********"
              ></input>
            </div>
          </div>
          <button type="submit" className="submit-container">
            Create account
          </button>
        </form>
      </div>
    </StyledRegistrationForm>
  );
}
