import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from '../common/Header'
import Home from '../pages/Home/Home'
import Footer from '../common/Footer'
import About from '../pages/About/About'
import Blog from '../pages/Blog/Blog'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from '../pages/Home/components/Cart'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import { GlobalThemeContext } from '../context/ThemeContext'
import Wishlist from '../Wishlist/Wishlist'
import Gallery from '../pages/Gallery/Gallery'
import Columns from '../pages/Gallery/Columns'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/Login'
import PrivateRouter from '../routes/PrivateRouter'
import Admin from '../pages/Login/Admin'
import AddBlog from '../pages/Login/AddBlog'
import BigImages from '../pages/Gallery/BigImages'
import EditPage from '../pages/Login/EditPage'
import Shopping from '../pages/Home/components/Shopping'
import NewPage from '../pages/Home/components/NewPage'
import SilkPage from '../pages/Home/components/SilkPage'
import Spinner from '../common/Spinner'
import TopBtn from '../common/TopBtn'
import NotFoundPage from '../common/NotFoundPage'
const AppRouter = () => {
  const {darkMode}=useContext(GlobalThemeContext)
  const [loading, setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  return (
    <> 
    {loading ? <Spinner/> :( <main className={darkMode ? "dark" :"light"}>
   <BrowserRouter>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={false}
    theme="light"
    />
    <Header/>
    <TopBtn/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/shopping" element={<Shopping/>}/>
        <Route path="/product/:id" element={<DetailsPage/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/column" element={<Columns/>}/>
        <Route path="/newPage" element={<NewPage/>}/>
        <Route path="silkPage" element={<SilkPage/>}/>
        <Route path="/bigImages" element={<BigImages/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/editBlog/:id" element={<EditPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route element={<PrivateRouter/>}>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/addBlog" element={<AddBlog/>}/>
        </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </main>)}
  
      
    </>
  )
}

export default AppRouter
