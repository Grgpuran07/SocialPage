import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState,useContext } from 'react'
import { UserContext } from '../App'
import M from "materialize-css"

const SignIn = () => {
  const {state,dispatch} = useContext(UserContext) 
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const PostData = () =>{
    fetch("/signin",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
           email,
           password
      })
    }).then(res=>res.json()).then(data=>{
      console.log(data)
      if(data.error){
        M.toast({html:data.error,classes:"#b71c1c red darken-4"})
      }else{
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
        dispatch({type:"USER",payload:data.user})
        M.toast({html:"Signed in sucess",classes:"#43a047 green darken-1"})
        navigate("/")
      }
    })
  }
  return (
    <div className='mycard'>
        <div className='card auth-card input-field'>
            <h2>Instagram</h2>
            <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className="btn waves-effect waves-light #1565c0 blue darken-1" type="submit" name="action" onClick={()=>PostData()}>Login
              <i className="material-icons right">send</i>
            </button>
            <p><Link to="/signup">Don't have account?Signup first.</Link></p>
        
        </div>
    </div>
  )
}

export default SignIn