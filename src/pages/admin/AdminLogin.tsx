import { useState } from "react";

const AdminLogin = () => {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = (e:any) => {
e.preventDefault();

if(email === "admin@orimind.com" && password === "admin123"){
  window.location.href="/admin";
}else{
  alert("Invalid login");
}

};

return (

<div className="min-h-screen bg-black flex items-center justify-center">

  <form
    onSubmit={handleLogin}
    className="bg-gray-900 p-10 rounded-xl w-96 border border-gray-800"
  >

    <h2 className="text-white text-2xl mb-6 font-semibold">
      Admin Login
    </h2>

    <input
      type="email"
      placeholder="Email"
      className="w-full mb-4 p-3 bg-gray-800 text-white rounded"
      onChange={(e)=>setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      className="w-full mb-6 p-3 bg-gray-800 text-white rounded"
      onChange={(e)=>setPassword(e.target.value)}
    />

    <button
      className="w-full bg-cyan-400 text-black py-3 rounded font-semibold"
    >
      Login
    </button>

  </form>

</div>

);
};

export default AdminLogin;
