import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [singInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/' ;

    const handleGoogleSingIn = () =>{
        singInWithGoogle()
        .then(() =>{
            navigate(from, {replace: true})
        })
    }
    return (
        <div>
            <h2>Please login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={handleGoogleSingIn}>Google Sing In</button>
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