import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {SRC_URL, USER_AVATAR} from "../utils/constant";


const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  
  const dispatch=useDispatch();
  const email=useRef(null);
  const password=useRef(null);
  const name =useRef(null);
  const handleButtonClick=()=>{
    //validate forms
    const message =checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;
    //sign in and signup now
    if(!isSignInForm){
      //Signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL:USER_AVATAR,
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(
        addUser({
          uid:uid,email:email,displayName:displayName,photoURL:photoURL
        })
      );
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" + errorMessage)
    // ..
  });


    }
    else{
      //SignIn logice
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });


    }
  }
  const toggleSignInForm=()=>{

    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header />
        <div className='absolute'> 
        <img className='h-screen object-cover' src={SRC_URL}
        alt='logo'/>
            
        </div>
        <form  onSubmit={(e)=>e.preventDefault()} className='w-full p-12 bg-black absolute md:w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-3 px-9'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
              <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 bg-gray-700 w-full rounded-lg ' />
            )}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 bg-gray-700 w-full rounded-lg '/>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 bg-gray-700 w-full rounded-lg '/>
            <p className='text-red-600 font-bold text-lg py-2 px-2'>{errorMessage}</p>
            <button className='py-3 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer'onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now " }</p>
        </form>
    </div>
  )
}

export default Login