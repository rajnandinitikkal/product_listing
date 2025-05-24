import React from 'react';
import { Link } from 'react-router-dom';

function signUp() {
  return (
    <>
    <div>sign-up</div>

    <div className='box-item-a'>
        <form>
         <div className='login-box'>

          <div className='logintext'>
            <span >Register page</span>
          </div>
           <input type="email" placeholder='Enter Email' name='email' className='input-content' required></input>
           <input type="Password" placeholder='@1#$&tdR' name='password' className='input-content' required></input>
           <div>
           <button type='submit' className='submitbtn'>Submit</button>
           </div>
         </div>
         <p>Don't have an account? <Link to='/'>Login here</Link></p>
         </form>
      </div>

      </>
  )
}

export default signUp