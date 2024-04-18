import React from 'react'
import "./hero.scss"

const hero = () => {
  return (
    <>
      <div className="hero__section">
        <h1>Hello there!</h1>
        <h3>Please sign in or create accaunt to continue</h3>
        <div className="hero">
          <div className="hero__left">
            <form action="">
              <h2>Sign In</h2>

              <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" />
              </label>

              <label htmlFor="password">
                Password
                <input type="password" name="password" id="password" />
              </label>

              <div className=" flex" id="remember" htmlFor="remember">
                <input type="checkbox" name="remember" checked />
                Remember my details
              </div>

              <button>Sign In</button>

              <a href="#">Forgot password?</a>
            </form>
          </div>

          <div className="hero__right">

            <form action="">
            <h2>Create Account</h2>
              <label htmlFor="name">
                First Name
                <input type="text" name="name" id="name" />
              </label>

              <label htmlFor="name">
                Last Name
                <input type="text" name="name" id="name" />
              </label>

              <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" />
              </label>

              <label htmlFor="password">
                Create Password
                <input type="password" name="password" id="password" />
              </label>

              <label htmlFor="password">
                Confirm Password
                <input type="password" name="password" id="password" />
              </label>

              <div className=" flex" id="remember" htmlFor="remember">
                <input type="checkbox" name="remember" checked />I want to
                receive Safari newsletters with the best deals and offers
              </div>

              <button>Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default hero