import React from 'react';
import {Link, Navigate} from "react-router-dom";
import {useAuth} from "../hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice";
import {useAppSelector} from "../hooks/redux-hooks";
import Card from "../components/Card";


const HomePage = () => {
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch();
    const users = useAppSelector(store => store.users);
    return isAuth ? (
        <div>
            <h1 className="text-3xl mb-4">Welcome {email}</h1>
            <Link to="/add-user">
                <button
                    className="bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-600 mb-10 flex gap-4">
                    Add Contact
                </button>
            </Link>
            {users.length ? <Card /> : <p className="text-lg font-bold">No User</p>}
            <button onClick={() => dispatch(removeUser())}
                    className="bg-indigo-500 p-2 rounded-md text-white hover:bg-indigo-600 flex gap-2">
                    Log out
            </button>
        </div>
    ) : (<>
            <Navigate to="/login"/>
        </>
    );
};

export default HomePage;