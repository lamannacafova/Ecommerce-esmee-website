import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { GlobalThemeContext } from '../../context/ThemeContext';
const AuthBtn = () => {
    const data=JSON.parse(localStorage.getItem("User"))
    const display=JSON.parse(localStorage.getItem("display"))
    const logOut=()=>{
        localStorage.removeItem("User")
        window.location.reload()
    }
    const {darkMode}=useContext(GlobalThemeContext)
    const auth=()=>{
        if(data){
            return   <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {data.userName}
            </button>
            <ul className="dropdown-menu">
              { display ? <NavLink to="/admin" className="dropdown-item" >Dashboard</NavLink> :  ""
              }
            <NavLink onClick={logOut} style={{paddingLeft:"20px"}} >Log out</NavLink>
            </ul>
          </div>
        }
        else{
            return(
                <NavLink to="/login">
                 {darkMode ? <BsPersonFill className="fs-4"/> : <BsPerson className="fs-4" />}
                </NavLink>
            )
        }
    }
  return (
    <>
    {auth()}
    </>
  )
}

export default AuthBtn

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { authUser } from "../utils/Util";
// import {CiUser} from 'react-icons/ci'

// const AuthBtn = () => {
//   const data = JSON.parse(localStorage.getItem("User"));
//   const display=JSON.parse(localStorage.getItem("display"))
//   const logOut = () => {
//     localStorage.removeItem('User');
//     window.location.reload();
//   };
//   const auth = () => {
//     if (authUser()) {
//       return (
//         <div className="dropstart ">
//           <button
//             className="user-btn dropdown-toggle themeMode"
//             type="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//            <span className="px-2"><CiUser/></span>{data.userName}
//           </button>
//           <ul className="dropdown-menu my-3">
//             {display?
//             <li className='drop-item'>
//             <NavLink to='/admin' className="dropdown-item">Dashboard</NavLink>
//             </li>
//             :""
//             }
//              <li onClick={logOut}><NavLink>Log Out</NavLink> </li>
//           </ul>
//         </div>
//       );
//     } else {
//       return <NavLink to="/login"> <CiUser/></NavLink>;
//     }
//   };
//   return <>{auth()}</>;
// };
// export default AuthBtn;
