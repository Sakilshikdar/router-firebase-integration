import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [singInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2>Please login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={() => singInWithGoogle()}>Google Sing In</button>
            </div>
            <form action="">
                <input type="email" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;