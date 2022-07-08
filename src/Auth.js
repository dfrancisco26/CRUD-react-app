import React from 'react';
import { useState } from 'react';
import { signUp } from './services/fetch-utils';



export default function Auth({ setUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {

    e.preventDefault();

    const user = await signUp(email, password);

    setUser(user);
  }

  return (
    <div className='auth'>
      <form className='login-form' onSubmit={handleSubmit}>
        <label>Email<input onChange={e => setEmail(e.target.value)} value={email} type='email'></input></label>
        <label>Password<input onChange={e => setPassword(e.target.value)} value={password} type='password'></input></label>
        <button>Sign Up</button>
      </form>
      {/* <br></br>
      <hr></hr>
      <br></br>
      <label>Not a user already?
        <form>
          <label>Email<input onChange={e => setEmail(e.target.value)} value={email} type='email'></input></label>
          <label>Password<input onChange={e => setPassword(e.target.value)} value={password} type='password'></input></label>
          <button>Sign Up</button>
        </form>
      </label> */}
    </div>
  );
}
