import react from"react"
import Login from "./pages/Web/login"
import { BrowserRouter,Route,Routes } from "react-router-dom"

import Weblayout from'./layout/Weblayout'
import Home from "./pages/Web/Home"
  export default function App() {
    return (
     
      <>
    <BrowserRouter>
    <Routes>
      <Route element={<Weblayout />}>
        
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login />}/>
      </Route>
    </Routes>
    </BrowserRouter>
      </>
    )
  }