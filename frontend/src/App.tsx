import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateUser } from './pages/Create'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position='top-right' />
    </>
  )
}

export default App
