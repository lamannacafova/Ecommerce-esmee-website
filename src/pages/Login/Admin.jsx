import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RemoveBlogFunction,RemoveAllBlogFunction } from "../../redux/Actions";
import { NavLink } from 'react-router-dom';
const Admin = () => {
  const myBlog = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(myBlog));
  }, [myBlog]);
  const data=JSON.parse(localStorage.getItem("User"))
  const [message,setMessage]=useState('')
  const [show,setShow]=useState(true)
  console.log(setShow);
  useEffect(() => {
    if (data && data.userName) {
      setMessage(`Salam ${data.userName}😊`);
      const timeoutId = setTimeout(() => {
        setMessage('');
        setShow(false)
      }, 5000);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);
  return (
    <>
    {
      show ?
    
         <section className="show-admin">
            <p>{message}</p>
         </section> :
        <section className="admin pt-5">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myBlog.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>
                      <img src={item.img} alt="" style={{ height: "100px" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.desc}</td>
                    <td>
                    <NavLink className="btn btn-warning mx-3" to={`/editBlog/${item.id}`}><i class="fa-regular fa-pen-to-square" style={{color:"white"}}></i></NavLink>
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(RemoveBlogFunction(item.id))}
                      >
                       <i class="fa-regular fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <NavLink to="/addBlog" className="btn btn-danger mt-5 add ">
            Add new Blog
          </NavLink>
          <button className="btn btn-danger mx-4 mt-5 clear" onClick={()=>dispatch(RemoveAllBlogFunction())}>Clear All</button>
        </div>
      </section>
}
    </>
  )
}

export default Admin
