import { useNavigate } from "react-router-dom";

const Login=()=>{
  
   const navigate=useNavigate()
   const gotologin =()=>{
      navigate("/Home")
   }
   
   return(
    <>
    <div>

        <div>
            <h1>Login Page</h1>
        </div>
     <form>
        <label for="id"> Enter Your ID:</label>
        <input type="text" placeholder="Enter Your Email" required />
        <label for="password"> Enter Your Password:</label>
        <input type="password" required/>
     </form>
     <div>
      <button onClick={gotologin}>Login</button>
     </div>
    </div>
    </>
   )

}
export default Login;