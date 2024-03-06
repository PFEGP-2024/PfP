import './App.css'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
{
  path: '/',
  element: <div> <Login/></div>,
},
{
  path: '/Register',
  element: <div><Register/></div>,
}
])



function App() {
  

  return (
   <div>
   <RouterProvider router={router}/>
   </div>
     
  )
}

export default App
