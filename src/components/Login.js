import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault()
        //signin with firebase
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            navigate('/')
        }).catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        //register with firebase
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
                if (auth) {
                    navigate('/')
                }
            }).catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='Amazon logo' />
        </Link>

        <div className='login__container'>
            <h1>Sign in</h1>

            <form>
                <label >Email</label>
                <input 
                    name='email' 
                    type='text' 
                    placeholder='example@email.com' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />

                <label>Password</label>
                <input 
                    name='password' 
                    type='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={signIn} className='login__singInButton' type='submit'>Sign in</button>
            </form>

            <p>
                By signing in you agree to the AMZON FAKE CLONE conditions of use & sale. Please see our privacey notice, our cookies notice and our interest-based ads notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create account</button>
        </div>
    </div>
  )
}

export default Login