import './App.css'
import { Login } from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Navbar from './Components/Navbar/Navbar'
import Left_Bar from './Components/Left_Bar/Left_Bar'
import Right_Bar from './Components/Right_Bar/Right_bar'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Mode from './Contexts/Mode'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";



function App() {
  let current_user = true;
  const Layout = () => {
    return (
      <>

      </>
    )
  }
  const ProtectedRoute = ({ children }) => {
    if (!current_user) {
      return <Navigate to="/login" />
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/Social_media_app_react/",
      element: <Mode>
        <Navbar />
        <div className="app_container">
          <Left_Bar />
          <Home />
          <Right_Bar />
        </div>
      </Mode>
    },
    {
      path: "/profile/:id",
      element: <Mode>
        <Navbar />
        <div className="app_container">
          <Left_Bar />
          <Profile />
          <Right_Bar />
        </div>
      </Mode>

    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
