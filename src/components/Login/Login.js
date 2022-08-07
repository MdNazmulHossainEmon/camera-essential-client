import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle} =useAuth();
    const location = useLocation();
    const history = useNavigate();

    const handleLogin = ()=>{
        signInUsingGoogle(location, history);
    }

    return (
        <div className='py-5 text-center'>
            <Button onClick={handleLogin} variant="primary">Google SignIn</Button>
        </div>
    );
};

export default Login;