import React, {useState} from 'react';
import {v4} from "uuid"
import TextFiled from "../components/TextFiled";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser} from "../store/slices/contactSlice";


const AddUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState({name: '', tel: ''})
    const handleAddUser = () => {
        setValues({name: '', tel: ''})
        dispatch(addUser({
            id: v4(),
            name: values.name,
            tel: values.tel
        }))
        navigate('/')
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextFiled
                label="Name"
                inputProps={{type: 'name', placeholder: 'Name'}}
                onChange={(e) => setValues({...values, name: e.target.value})}
                value={values.name}/>
            <br/>
            <TextFiled
                label="Telephone"
                inputProps={{type: 'tel', placeholder: 'Telephone'}}
                onChange={(e) => setValues({...values, tel: e.target.value})}
                value={values.tel}/>
            <Button onClick={handleAddUser}>Submit</Button></div>
    );
};


export default AddUser;