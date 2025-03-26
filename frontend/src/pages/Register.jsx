import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import OurPolicy from '../components/OurPolicy'
import {assets} from '../assets/assets'
import Title from '../components/Title'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
  const [result, setResult] = React.useState("");
useEffect(() =>{
    const result = fetch("http://69.62.102.59:8090/user", {
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + localStorage.getItem('access'),
    },
    // ...
  }).then((response) => {
    if(response.status === 403){
      navigate('/login');
    }
    return response.json;
  })
  console.log(localStorage)
});




const handleSubmit = async (e) =>{
  e.preventDefault()
  const {username, email, password } = e.target.elements
  var result = await fetch("http://69.62.102.59:8090/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ 
    name: username.value,
    email: email.value,
    password: password.value
  }),
  // ...
}).then(response => response.json())
.then(data => {
  const accessToken = data.token;
  localStorage.clear()
  localStorage.setItem('access', data.token)
  console.log(localStorage)
  // Save the access token in a React state or state management system
});
navigate('/dashboard');
}
  

  return (
<div class="flex min-h-full flex-col justify-center px-6 py-44 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Registre sua conta</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} class="space-y-6" action="" method="POST">
      <div>
        <label for="username" class="block text-sm/6 font-medium text-gray-900">Nome de Usuário</label>
        <div class="mt-2">
          <input type="text" name="username" id="username" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus-visible:outline-[#285591] sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">E-mail</label>
        <div class="mt-2">
          <input type="email" name="email" id="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus-visible:outline-[#285591] sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Senha</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-[#014BAE] hover:text-[#285591]">Esqueceu a Senha?</a>
          </div>
        </div>
        <div class="mt-2">
          <input type="password" name="password" id="password" autocomplete="current-password"  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus-visible:outline-[#285591] sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-[#014BAE] py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#285591] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm/6 text-gray-500">
      Já possui uma conta?
      <a href="/login" class="font-semibold text-[#014BAE] hover:text-[#285591]">Login</a>
    </p>
  </div>
</div>

  )
}

export default Register