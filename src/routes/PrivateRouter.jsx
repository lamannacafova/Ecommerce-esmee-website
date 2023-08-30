import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
const PrivateRouter = () => {
    const data =localStorage.getItem("User")
    const authUser=()=>{
        if(data) return true
        else return false
    }
    if(authUser()){
        return <Outlet/>
    }
    else {
        return <Navigate to="login"/>
    }
}

export default PrivateRouter
