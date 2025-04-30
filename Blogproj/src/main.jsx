import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login, Signup} from './components/index.js'
import AddPost from "./pages/AddPost"
import authService from "./appwrite/auth.js"
import EditPost from './pages/EditPost'
import Post from './pages/Post'
import Allposts from "./pages/Allposts"
//import { createRoot } from 'react-dom/client'
const userd = async () => {
  const userData = await authService.getCurrentUser()
  console.log(userData)
}

userd()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication = {false}>
            
            <Login />
          </AuthLayout>

        ),
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication = {true}>
            {console.log('Signup rendered')}
            <Signup />
          </AuthLayout>

        ),
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication>
            {" "}
            <Allposts />
          </AuthLayout>

        ),
      },

      {
        path: '/add-post',
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>

        ),
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>

        ),
      },
      {
        path: '/post/:slug',
        element: <Post />
      },

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)










