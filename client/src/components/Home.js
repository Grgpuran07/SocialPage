import React from 'react'

const Home = () => {
  return (
    <div className='home'>
        <div className='card home-card'>
            <h5>diya</h5>
            <div>
            <img style={{width:"100%",maxHeight:"700px"}} src='https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
            </div>
            <div className='card-content'>
            <i className="material-icons" style={{color:"red"}}>favorite</i>
            <h6>Title</h6>
            <p>This is am amazing post.</p>
            <input type="text" placeholder="Enter your comment."/>
            </div>
        </div>
        <div className='card home-card'>
            <h5>diya Tamang</h5>
            <img style={{width:"100%"}} src='https://images.unsplash.com/photo-1563620915-8478239e9aab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
            <div className='card-content'>
            <i className="material-icons" style={{color:"red"}}>favorite</i>
            <h6>Title</h6>
            <p>This is am amazing post.</p>
            <input type="text" placeholder="Enter your comment."/>
            </div>
        </div>
        <div className='card home-card'>
            <h5>diya gurung</h5>
            <img style={{width:"100%"}} src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
            <div className='card-content'>
            <i className="material-icons" style={{color:"red"}}>favorite</i>
            <h6>Title</h6>
            <p>This is am amazing post.</p>
            <input type="text" placeholder="Enter your comment."/>
            </div>
        </div>
    </div>
  )
}

export default Home