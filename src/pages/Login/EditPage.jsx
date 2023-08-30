import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { EditBlogFunction } from '../../redux/Actions'
const EditPage = () => {
    const {id}=useParams()
    const myBlog=useSelector((store)=>store.AppReducer)
    console.log(myBlog)
    const mySelectedBlogForEdit=myBlog.find((item)=>item.id===id)
    console.log(mySelectedBlogForEdit)
    const [currentBlog,setCurrentBlog]=useState(mySelectedBlogForEdit)
    const location=useNavigate()
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        const{name,value}=e.target
        setCurrentBlog({...currentBlog, [name]:value})
        console.log(currentBlog)
    }
     const submitForm=(e)=>{
         e.preventDefault()
         dispatch(EditBlogFunction(currentBlog))
         location("/blog")
        //  window.location.reload()
     }
  return (
    <>
     <div className="edit">
         <h2>Edit Page</h2>
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Blog id
            </label>
            <input
              type="text"
              className="form-control"
              disabled="disabled"
              name="title"
              defaultValue={currentBlog.id}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              defaultValue={currentBlog.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="desc"
              defaultValue={currentBlog.desc}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              name="img"
              defaultValue={currentBlog.img}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger"
            style={{ width: "150px" }}
          >
            Submit
          </button>
        </form>
     </div>
    </>
  );
};

export default EditPage;
