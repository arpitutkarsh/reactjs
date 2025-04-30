import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import authSlice from '../../store/authSlice'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate() //useNavigate() is used to navigate to different routes programmatically

  //whenever this type of navigation bar is formed then usually an array is created to loop upon
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]


  //we will show logout button only when the user is logged in that is conditionla rendering 
  return (
    <header className='py-3 shadow w-full h-24 bg-green-400  mx-auto border-b border-red-300'> 
      <Container>
        <nav className='flex'>
          <div className='mr-4 '>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button 
                  onClick={() => {console.log(item.slug)
                    navigate(item.slug)}

                  }
                  
                  className='inline-block text-xl px-6 py-2 duration-200 hover:bg-amber-500 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
              
            )}

            

            

          
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header