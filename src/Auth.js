import React from 'react';

export default function Auth() {
  return (
    <div className='auth'>
      <form>
        <label>Email<input name='email'></input></label>
        <label>Password<input name='password'></input></label>
        <button>Submit</button>
      </form>
    </div>
  );
}
