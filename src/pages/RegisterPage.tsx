import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../components/SignUp";

const RegisterPage = () => {
    return (
        <div>
            <h1 className="text-3xl mb-8">Register</h1>
            <SignUp/>
            <p className="text-xl mt-2">
                Already have an account? <Link to="/login" className="underline">Sign in</Link>
            </p>
        </div>
    );
};

export default RegisterPage;