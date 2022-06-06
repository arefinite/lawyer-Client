import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const Registration = () => {
  const [error , setError] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification : true});
    const [updateProfile, updating, error2] = useUpdateProfile(auth);

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate()
    const handleSubmitReg = async  (e) => {
        e.preventDefault()
        const displayName= e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirm = e.target.confirmPassword.value
        
        
        setError('')
        if(password.length > 5){
            if(password === confirm) {
                await  createUserWithEmailAndPassword(email , password)
                await updateProfile({ displayName });
                if(error1?.message.length < 6){
                    toast(`Congratulations ! ${displayName} Please Confirm Your Email Address`)
                }
            }else{
                setError("Password Didn't Matched")
            }
        }else{
            setError('Password Must Be 6 Characters')
        }
    }
    if(user){
        navigate(from, { replace: true })
    }


    return (

        <div className="md:w-1/2  mx-auto justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <p className="py-4 text-2xl text-blue-500 font-bold">Registration</p>
    <form onSubmit={handleSubmitReg}>
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
        Full Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  name='name' type="text" placeholder="Full Name" required/>
    </div>
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  name='email' type="email" placeholder="Email" required/>
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name='password' type="password" placeholder="******************" required/>
      
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
        Confirm Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"   name='confirmPassword' type="password" placeholder="******************" required/>
      <p className="text-red text-xs italic">Please choose a password.</p>
    </div>
    <p className='text-red-500 font-semibold'>{error.length>6 ? error : <>{error1?.message.length > 5 ? error1?.message : error2?.message}</>}</p>
    <div className="flex items-center justify-between">
    <input className="bg-neutral-300 p-1 w-1/4 rounded font-semibold duration-300 my-2  hover:bg-blue-300 hover:text-white"  type="submit" value="Sign Up" />
    </div>
    </form>
    <p>
        Already Have an Account 
        <Link to='/login' className="ml-2 inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Login Here
      </Link>
      </p>
      <ToastContainer />
</div>
    );
};

export default Registration;