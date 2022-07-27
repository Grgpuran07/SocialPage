import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route,useNavigate} from "react-router-dom"
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import { useEffect,createContext,useReducer,useContext } from 'react';
import { reducer,initialState } from './reducers/userReducer';

export const UserContext = createContext()

const Routing = () =>{
  const navigate = useNavigate()
  const {state,dispatch} = useContext(UserContext);

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    // console.log(typeof(user))
    // console.log(user)
    // console.log(typeof(user))
    if(user){
      dispatch({type:"USER",payload:user})
      navigate("/")
    }else{
      navigate("/login")
    }
  },[])
  return(
  <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<SignIn/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/create" element={<CreatePost/>}/>
  </Routes>
  </>
)
   

}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
     <>
     <UserContext.Provider value={{state,dispatch}}>
     <BrowserRouter>
     <Navbar/>
      <Routing/>
     </BrowserRouter>
     </UserContext.Provider>
      
     </>
  );
}

export default App;
