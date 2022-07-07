import React from 'react';

export default function Auth() {
  return (
    <div className='auth'>
      <form className='login-form'>
        <label>Email<input name='email'></input></label>
        <label>Password<input name='password'></input></label>
        <button>Log In</button>
      </form>
      <br></br>
      <hr></hr>
      <br></br>
      <label>Not a user already?
        <form>
          <label>Email<input name='email'></input></label>
          <label>Password<input name='password'></input></label>
          <button>Sign Up</button>
        </form>
      </label>
    </div>
  );
}
