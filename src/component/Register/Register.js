import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Resister</h3>
            <form>
                <input type="text" id=""  placeholder='Your name'/>
                <br />
                <input type="email" id="" placeholder='Your Email'/>
                <br />
                <input type="password" name="" id="" placeholder='Your password'/>
                <input type="submit" value="Resister" />
            </form>
        </div>
    );
};

export default Register;