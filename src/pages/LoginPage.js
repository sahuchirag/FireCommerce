import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loader from '../components/Loader';


function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [loading, setLoading] = useState(false);

    const auth = getAuth();
    const login = async()=>{
        try {
            setLoading(true);
            const result = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('currentUser', JSON.stringify(result))
            console.log(result);
            setLoading(false);
            toast.success('Login successful!')
            window.location.href='/'
        } catch (error) {
            console.log(error);
            toast.error('Login failed.')
            setLoading(false);
        }
    }
    
    return (
        <div className="login-parent">
            {loading && (<Loader />)}
            <div className='row justify-content-center'>
                <div className="col-md-4 z1">
                    <div className="login-form">
                        <h2>Login</h2>
                        <hr />

                        <input type="text" className="form-control" placeholder="Enter E-mail ID" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="text" className="form-control" placeholder="Enter Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />

                        <button className='my-3' onClick={login}>LOGIN</button>
                        <hr />
                        <p>Do not have an account? Click <Link to='/register'>here</Link> to register.</p>
                    </div>
                </div>

                <div className="col-md-5 z1">
                    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_xbcftl35.json" background="transparent" speed="1" loop autoplay></lottie-player>
                </div>

                <div className='login-bottom'></div>
            </div>
        </div>
    );
}

export default LoginPage