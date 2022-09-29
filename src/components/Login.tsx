import Form from "./Form";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUser} from "../store/slices/userSlice";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }));
                navigate("/");
            })
            .catch(()=>alert('invalid user'))
    }

    return (
        <div>
            <Form
                title="sign in"
                handleClick={handleLogin}
            />
        </div>
    );
};

export default Login