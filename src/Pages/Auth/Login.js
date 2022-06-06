import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);
const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
if(error1?.message < 5){
    toast('Email Sent')
}
const location = useLocation()
let from = location.state?.from?.pathname || "/";

const emailRef = useRef('')
const passwordRef = useRef('')
const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    const email= emailRef.current.value
    const password = passwordRef.current.value
    signInWithEmailAndPassword(email, password)
}

if(user){
    navigate(from, { replace: true })
}
const handelRestPass = async e =>{
    await sendPasswordResetEmail(emailRef.current.value);
    if(!error1?.message){
        toast("Reset Password Email Sent")
    }
}

    return (
<div className="md:w-1/2  mx-auto justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <p className="py-4 text-2xl text-blue-500 font-bold">Login</p>
    <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Email" required/>
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input ref={passwordRef} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" required/>
      <p className="text-red text-xs italic">Please choose a password.</p>
    </div>
    <p style={{color: 'red'}}>{error?.message} {}{error1?.message}</p>
    <div className="flex items-center justify-between">
    <input className="bg-neutral-300 p-1 w-1/4 rounded font-semibold duration-300 my-2  hover:bg-blue-300 hover:text-white"  type="submit" value="Sign In" />

      <p onClick={handelRestPass} className="inline-block cursor-pointer align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </p>
      

    </div>
    </form>
    <p>
        Don't Have an Account 
        <Link to='/registration' className="ml-2 inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Register Here
      </Link>
      </p>
      <ToastContainer />
</div>
    );
};

export default Login;