import react from "react"
import Login from "./pages/Web/login"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Weblayout from './layout/Weblayout'
import Home from "./pages/Web/Home"

import Admindashboard from "./pages/Admin/Admindashboard"
import Adminlayout from "./layout/Adminlayout"
import AdminUsers from "./pages/Admin/AdminUsers"
import AdminJobs from './pages/Admin/AdminJobs'
import Register from "./pages/Web/Register"
import Userlayout from "./layout/Userlayout"
import Userdashboard from "./pages/User/Userdashboard"
import Userjobs from "./pages/User/Userjobs"
import Userprofile from "./pages/User/Userprofile"
import UserResume from "./pages/User/UserResume"
import UserPremium from "./pages/User/UserPremium"
import UserFeedback from "./pages/User/UserFeedback"

export default function App() {
  return (

    <>
    <BrowserRouter>
      <Routes>
        {/* Web Routes */}
        <Route element={<Weblayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
          <Route path="/user/resume" element={<UserResume/>} />

        {/* Admin Routes */}
        <Route element={<Adminlayout />}>
          <Route path="/admindashboard" element={<Admindashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/jobs" element={<AdminJobs />} />
        </Route>

        {/* User Routes */}
        <Route element={<Userlayout />}>
          <Route path="/userdashboard" element={<Userdashboard />} />
          <Route path="/user/jobs" element={<Userjobs />} />
          <Route path="/user/profile" element={<Userprofile />} />
          <Route path="/user/resume" element={<UserResume/>} />
          <Route path="/user/premium" element={<UserPremium/>} />
        </Route>
          <Route path="/user/feedback" element={<UserFeedback/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}