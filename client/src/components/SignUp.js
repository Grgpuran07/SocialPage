import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import { useState } from 'react'
import M from "materialize-css"

const SignUp = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const PostData = () =>{
    // if(!^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$.test(email)){
    //   return ()
    // }
    fetch("/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    }).then(res=>
      res.json()
      // console.log(res.json())
    ).then(data=>{
      // console.log(data)
      if(data.error){
        M.toast({html:data.error,classes:"#b71c1c red darken-4"})
      }else{
        M.toast({html:data.message,classes:"#43a047 green darken-1"})
        navigate("/login")
      }

    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className='mycard'>
        <div className='card auth-card input-field'>
            <h2>Instagram</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className="btn waves-effect waves-light #1565c0 blue darken-1" onClick={()=>PostData()}>Signup
              <i className="material-icons right">send</i>
            </button>
            <p><Link to="/login">Aready have account?Login.</Link></p>
        
        </div>
    </div>
  )
}

export default SignUp