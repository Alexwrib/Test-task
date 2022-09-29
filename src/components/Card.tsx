import React from 'react';
import {Link} from "react-router-dom";
import {deleteUser} from "../store/slices/contactSlice";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks/redux-hooks";
import {DeleteIcon} from "../assets/delete"
import {EditIcon} from "../assets/edit";




const Card = () => {
    const dispatch = useDispatch()
    const handleRemoveUser = (id: string | number) => {
        dispatch(deleteUser({id: id}));
    };
    const users = useAppSelector(store => store.users);


    return (
        <>
            <div>
                {users.map((user) => (
                    <div className="rounded-lg w-80 bg-gray-200 p-5 flex items-center justify-between mb-2"
                         key={user.id}>
                        <div>
                            <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
                            <span className="font-normal text-gray-600">{user.tel}</span>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Link to={`edit-user/${user.id}`}>
                                <button className="mt-1.5">
                                    <EditIcon/>
                                </button>
                            </Link>
                            <button onClick={() => handleRemoveUser(user.id)}>
                                <DeleteIcon/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card