import { useState } from 'react';

const ip = "http://192.168.1.201:5000/"
const Authentication = () => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) =>{
    event.preventDefault();
    const response = await fetch(ip + "api/login", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        { username, password }
      ),
    });
    const data = await response.json();
    if (data.token){
      localStorage.setItem("token", data.token);
      window.location.href = "/home";
    } 
    else{
      alert("Login failed")
    }
    
    alert("Login successful, token =\n" + data.token)
    
  }
    const handleRegister = async (event) =>{
    event.preventDefault();
    const response = await fetch(ip + "api/register", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        { username, password }
      ),
    });
    setUsername("");
    setPassword("");
    const data = response.json();
    console.log(data)
    

  }




  return (
    <div className="app-container w-screen h-screen flex items-center justify-center">
      <form className='flex flex-col items-center justify-center p-12 rounded-lg border-2 border-slate-200 shadow-lg'>
        <h1 className=' font-bold text-4xl mb-8 text-red-500'>Login</h1>
        <label>Username</label>
        <input
          className='border-2 rounded-md mb-4'
          type="text"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          placeholder="Username"
        />
        <label>Password</label>
        <input
          className='border-2 rounded-md mb-4'
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
        />

        <button  className='btn-main text-2xl font-bold' onClick={handleLogin}>Login</button>
        <button  className='btn-main' onClick={handleRegister}>Register</button>
      </form>

    </div>
  );
}


export default Authentication;