import React,{useState} from "react"
import { useNavigate } from "react-router-dom";



const Login = ({setUser}) => {
    const navigate =useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    

  
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              setUser(user)
              navigate("/home")
              
            });
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
  return (
    <div>
  
<div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
  <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <h1 class="font-bold text-center text-2xl mb-5">Login</h1>  
    <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <div class="px-5 py-7">
        <label class="font-semibold text-sm text-gray-600 pb-1 block" >name</label>
        <input type="text" id="username" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"value={username} onChange={(e) => setUsername(e.target.value)}  />
        <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
        <input type="text" id="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block" onClick={handleSubmit}>
            <span class="inline-block mr-2">Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
      </div>
      <div class="p-5">
          <div class="grid grid-cols-3 gap-1">
              <button type="button" class="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">MailUp</button>
              <button type="button" class="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Google</button>
              <button type="button" class="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Github</button>
          </div>
      </div>
        
      </div>
    </div>
    
  </div>
</div>
  )
}

export default Login