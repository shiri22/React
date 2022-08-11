import React from "react";
import {useNavigate} from 'react-router-dom'

const Home = () => {
        // Navigate used to Navigate from one page to another page same link useNavigate Hook
        // Navigate can be used in class and functional bt hooks can be used in nly functional components
    // const [auth, setAuth] = useState(false);
    // if(auth){
    //     return <Navigate to ="/Dashboard" />
    // }
    const history = useNavigate();
  return (
    <div style={{display:"block",textAlign:"center",justifyContent:"center"}}>
        Welcome To Home Page
        <br></br>
        {/* <button onClick={()=>setAuth(true)}>Login</button> */}
        <button onClick={()=>history('/Dashboard')}>Login</button>
    </div>
  )
}

export default Home