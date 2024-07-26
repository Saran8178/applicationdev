import react from"react"
import Login from "./pages/Web/login"
import { BrowserRouter,Route,Routes } from "react-router-dom"

import Weblayout from'./layout/Weblayout'
import Home from "./pages/Web/Home"

import Admindashboard from "./pages/Admin/Admindashboard"
import Adminlayout from "./layout/Adminlayout"
import AdminUsers from "./pages/Admin/AdminUsers"
import AdminJobs from './pages/Admin/AdminJobs'
import Register from "./pages/Web/Register"

  export default function App() {
    return (
     
      <>
    <BrowserRouter>
    <Routes>
      <Route element={<Weblayout />}>
        
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
 
      </Route>
    </Routes>
    <Routes>
      <Route element={<Adminlayout />}>
        
         <Route path='/admindashboard' element={<Admindashboard/>}/>
         <Route path="/admin/users" element={<AdminUsers/>}/>
      <Route path='admin/jobs' element={<AdminJobs />}/>
         
       
      </Route>
    </Routes>
    </BrowserRouter>
      </>
    )
  }