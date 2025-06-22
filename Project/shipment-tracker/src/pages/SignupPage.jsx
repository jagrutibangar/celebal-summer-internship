import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
  e.preventDefault();

  // Basic Validation
  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  } catch (err) {
    alert("Error: " + err.message);
  }
};


  const handleLogin = () => {
    navigate('/login');
  };

  return (
  <>
  <div className="bg-[url('./assets/home.jpg')] bg-cover bg-no-repeat h-screen">
    <div className='w-80 flex flex-col justify-self-center '>
    <form onSubmit={handleSignup}>
    <input className='h-10  rounded-4xl pl-4 m-5 bg-amber-50 mt-15 w-80' type="email"  placeholder='Email' value={email}   onChange={(e) => setEmail(e.target.value)}/> 
    <input className='h-10  rounded-4xl pl-4 m-5 bg-amber-50 w-80' type="password"  placeholder='Password' />
    <input className='h-10  rounded-4xl pl-4 m-5 bg-amber-50 w-80' type="password"  placeholder='Confirm password' value={password}
    onChange={(e) => setPassword(e.target.value)} />
    <button className='h-12 rounded-4xl pl-4 m-5 bg-blue-600 text-amber-50 cursor-pointer w-80'>
    Get Started</button>

    <div className='w-[18rem] justify-between flex -mt-3 justify-self-center'>
        <span className='font-medium text-xs cursor-pointer  text-gray-700 ml-3' onClick={handleLogin}>Login</span>
        <span className='font-medium text-xs cursor-pointer text-gray-700 '>Need Help?</span>
    </div>
    </form>
    
    </div>
    </div>
   </>
  );
}

export default SignupPage;
