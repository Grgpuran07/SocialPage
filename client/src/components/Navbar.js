import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
import { UserContext } from '../App'
import { useContext } from 'react'

const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);
   
  const renderList = ()=>{
    if(state){
      return(
        [
          <li><Link to="/create">CreatePost</Link></li>,
          <li><Link to="/profile">Profile</Link></li>
        ]
      )
    }else{
      return(
        [
          <li><Link to="/login">Login</Link></li>,
          <li><Link to="/signup">Signup</Link></li>
        ]
      )
    }
  }
  return (
    <nav>
    <div className="nav-wrapper white">
      <Link to={state ? "/" : "/signup"} className="brand-logo">Instagram</Link>
      <ul id="nav-mobile" className="right">
          {renderList()}
      </ul>
    </div>
  </nav>
        
 )
}

export default Navbar
