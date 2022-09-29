import Form from "./Form";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }));
                navigate('/');
            })
            .catch(console.error)
    }

    return (
        <div>
            <Form
                title="register"
                handleClick={handleRegister}
            />
        </div>
    );
};

export default Login;