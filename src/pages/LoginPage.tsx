import React from 'react';
import {Link} from "react-router-dom";
import Login from '../components/Login'

const LoginPage = () => {
    return (
        <div>
            <h1 className="text-3xl mb-8">Login</h1>
            <Login/>
            <p className="text-xl mt-2">
                Or <Link to="/register" className="underline">Register</Link>
            </p>
        </div>
    );
};

export default LoginPage;