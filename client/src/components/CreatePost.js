import React from 'react'
import { useState,useEffect} from 'react'
import M from "materialize-css"
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [title,setTitle] = useState("")
  const [bodycontent,setBodycontent] = useState("")
  const [image,setImage] = useState("")
  const [url,setUrl] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    if(url){
      fetch("/createpost",{
        method:"post",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer " + localStorage.getItem("jwt")
        },
        body:JSON.stringify({
          title,
          bodycontent,
          pic:url
        })
      }).then(res=>res.json()).then(data=>{
        if(data.error){
          M.toast({html:data.error,classes:"#b71c1c red darken-4"})
        }else{
          M.toast({html:"Post created sucessfully.",classes:"#43a047 green darken-1"})
          navigate("/")
        }
      }).catch(err=>console.log(err))
  
    }

  },[url])

  const postDetails = () =>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","insta-clone")
    data.append("cloud_name","puranscloud")

    fetch("https://api.cloudinary.com/v1_1/puranscloud/image/upload",{
      method:"post",
      body:data
    }).then(res=>res.json()).then(data=>setUrl(data.url)).catch(err=>console.log(err))
    // console.log(url)

  }

  return (
    <div className='card input-filed' style={{margin:"40px auto", maxWidth:"600px",padding:"20px", textAlign:"center"}}>
        <input type="text" placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder="Body" value={bodycontent} onChange={(e)=>setBodycontent(e.target.value)} />
        <div className="file-field input-field">
      <div className="btn #1565c0 blue darken-1">
        <span>Upload Image</span>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
      </div>
    </div>
    <button className="btn waves-effect waves-light #1565c0 blue darken-1" type="submit" name="action" onClick={()=>postDetails()}>Submit post
              <i className="material-icons right">send</i>
            </button>
    </div>
  )
}

export default CreatePost