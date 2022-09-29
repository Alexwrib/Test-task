import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import TextFiled from "../components/TextFiled";
import Button from "../components/Button";
import {useDispatch} from "react-redux";
import {editUser} from "../store/slices/contactSlice";
import {useAppSelector} from "../hooks/redux-hooks";


const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useAppSelector(store => store.users)
    const navigate = useNavigate()
    const existingUser = users.filter(user => user.id === params.id)
    const {name, tel} = existingUser[0];
    const [values, setValues] = useState({
        name,
        tel
    })
    const handleEditUser = () => {
        dispatch(editUser({
            id: params.id,
            name: values.name,
            tel: values.tel
        }))
        navigate('/')
    }


    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextFiled
                label="Name"
                inputProps={{type: 'name',placeholder: 'Doe'}}
                onChange={(e) => setValues({...values, name: e.target.value})}
                value={values.name}
            />
            <br/>
            <TextFiled
                label="Telephone"
                inputProps={{type: 'tel',placeholder: '---'}}
                onChange={(e) => setValues({...values, tel: e.target.value})}
                value={values.tel}
            />
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
    );
};

export default EditUser;