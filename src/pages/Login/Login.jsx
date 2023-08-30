import React, {  useContext, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import {useNavigate} from "react-router-dom"
import { GlobalContext } from '../../context/GlobalState'


const Login = () => {
    // const user={
        // email:"necefovaleman2@gmail.com",
        // pass:"leman123"
    // }
  const {user,setUser}=useContext(GlobalContext)
    const [left,setLeft]=useState(false)
    const toggleLeft=()=>{
      setLeft(!left)
    }
    // Login
    const location =useNavigate()

    const submitForm=(e)=>{
        e.preventDefault()
        // console.log(email.current.value + pass.current.value);
        // console.log(user);
        if( 
          user.userName === name.current.value && user.email === email.current.value &&
          user.password === pass.current.value && 
          user.role==="admin" &&
          user.userName && user.email && user.password !== '')
          {
            toast.success("Login in successfull")
            localStorage.setItem("User",JSON.stringify(user))
            localStorage.setItem("display", JSON.stringify(true));
            location("/admin")
            window.location.reload()
            console.log('khsdkhfdhfs');
        }
        else if(
          user.userName === name.current.value && user.email === email.current.value &&
          user.password === pass.current.value && 
          user.userName && user.email && user.password !==''
        ){
          localStorage.setItem("User",JSON.stringify(user))
          localStorage.setItem("display", JSON.stringify(false));
          location("/cart")
          window.location.reload()
        } 
        else{
            toast.error("Informations error")
        }
    }
    const name=useRef();
    const pass =useRef();
    const email=useRef()

    // Sign up
    const checkForm=(e)=>{
      e.preventDefault()
      if(firstName && emailaddress && userPass!=='' ){
        return(
          setUser({
            userName: firstName.current.value,
            email :emailaddress.current.value,
            password: userPass.current.value
          })
        )
      } 
    }
    const firstName=useRef()
    const emailaddress=useRef()
    const userPass=useRef()
  return (
    <>
      <section className="logins">
      <div className="mains">
      <input type="checkbox"  id="chk" aria-hidden="false"/>
       <div className="signup">
         <form onSubmit={checkForm}>
         <label htmlFor="chk" aria-hidden="false">Sign up</label>
         <input type="text" name="" placeholder="User name" ref={firstName}/>
         <input type="email" name="" placeholder="Email" ref={emailaddress}  />
         <input type="password" name="" placeholder="Password" ref={userPass}/>
         <button onClick={toggleLeft}>Sign up</button>
         </form>
       </div>

       <div className="login">
         <form onSubmit={submitForm}>
           <label htmlFor="chk" aria-hidden="true">Login</label>
           <input type="text" name="" placeholder="Name" ref={name}/>
           <input type="email" name="" placeholder="Email" ref={email}/>
           <input type="password" name="" placeholder="Password" ref={pass}/>
           <button onClick={toggleLeft}>Login</button>
         </form>
       </div>

    </div>
      </section>
    </>
  )
}

export default Login
