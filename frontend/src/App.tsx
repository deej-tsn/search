
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Error from './pages/Error'
import About from './pages/About'
import ForgottenPassword from './pages/ForgottenPassword'
import {RequireAuth} from './class/RequireAuth'
import CreatePost from './pages/createPost'

function App() {

  return (
    <div className=' w-screen h-screen'>
    <BrowserRouter>
          <Routes>

            <Route path='' element={
            <RequireAuth>
              <Home user={{username : "", id: ""}}/>
            </RequireAuth>}/>
            <Route path='register' element = {<Register/>}/>
            <Route path='login' element = {<Login/>}/>
            <Route path='about' element = {<About/>}/>
            <Route path='forgottenpassword' element = {<ForgottenPassword/>}/>
            <Route path='*' element= {<Error/>}/>
            <Route path='createPost' element= {<RequireAuth> 
                                                <CreatePost user={{username: "" , id : ""}} />
                                              </RequireAuth>}/>
          </Routes>
        
        </BrowserRouter>
    </div>
   
  )
}

export default App
