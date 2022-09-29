import {FC, useState} from "react";

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void
}


const Form: FC<FormProps> = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')




    return (
        <div>
            <input
                className="p-2 mr-4 w-56 rounded-md bg-gray-200"
                type='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input
                className="p-2 rounded-l bg-gray-200"
                type='password'
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
            />
            <button className="bg-indigo-500 p-2 rounded-md text-white ml-6 hover:bg-indigo-600" onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </div>
    );
};

export default Form;