import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import lang from '../utils/languageConstant';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL,
          })
          );
          navigate("/browse");
                       
          // ...
        } else {
            dispatch(removeUser());
            navigate("/");
            
          // User is signed out
          // ...
        }
      });
      //unsubscribe when component unmounts
      return()=>unsubscribe();
},[dispatch]);
 
const handleGptSearchClick=()=>{
  //toggle my gpt search
  dispatch(toggleGptSearchView())
}
const handleLanguageChange=(e)=>{
  dispatch (changeLanguage(e.target.value))
}
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex  flex-col md:flex-row justify-between '>
        <img className='w-44 mx-auto md:mx-0'
        src={LOGO}
        alt='logo'/>
        {user && (<div className='flex justify-between p-2 '>
          {showGptSearch && (<select className='p-2 mx-2  my-5 bg-gray-900 text-white ' onChange={handleLanguageChange} >
            {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>)}
          <button className='py-2 px-4   text-white bg-purple-800 mx-4 rounded-lg  my-5' onClick={handleGptSearchClick}>{showGptSearch? "Home Page": "GPT Search"}</button>
          <img className='hidden md:block w-16 px-2 py-3 mx-2 my-2 right-2 p-10' alt='user icon' src={user?.photoURL}/>
          <button onClick={handleSignout} className=' left-1 font-bold text-white mx-2 my-2'>(Sign Out)</button>
        </div>
)}
    </div>
  )
}

export default Header;