import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import OurPolicy from '../components/OurPolicy'
import {assets} from '../assets/assets'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { cpfMask } from '../context/cpfMask'
import PaginationButtons from '../components/PaginationButtons'
import SearchBar from '../components/SearchBar'

const Dashboard = () => {
  const navigate = useNavigate();
  const [dataTable, setDataTable] = useState([]);
  const [result, setResult] = React.useState("");

  const [valor, setValor] = useState('')
  
  function handleChangeMask(event) {
      const { value } = event.target
        setValor(cpfMask(value));
  }

  const validateCpf = async (e) =>{
    var v = e.target.value;
    console.log(e.target);
   
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      e.target.value = v.substring(0, v.length-1);
      return;
   }
  }

const handleSubmit = async (e) =>{
  e.preventDefault()
  const {rga, cpf, nome, turma, formacao, registro } = e.target.elements
  var result = await fetch("http://fundacaoeducadionalwilliams.shop:8080/dashboard/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: 'Bearer ' + localStorage.getItem('access'),
  },
  body: JSON.stringify({ 
    rga: rga.value,
    cpf: cpf.value,
    nome: nome.value,
    turma: turma.value,
    formacao: formacao.value,
    registro: registro.value
  }),
  // ...
});
window.location.reload();
}

const getUsers = async () =>{
  var result = await fetch("http://fundacaoeducadionalwilliams.shop:8080/dashboard?page=0&size=10", {
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + localStorage.getItem('access'),
    },
    // ...
  }).then(response => response.json())
  .then(data => {
    setDataTable(data);
    // Save the access token in a React state or state management system
  });
}

const deleteRow = async (e) =>{
  e.preventDefault();
  var rga = e.target.id;
  console.log(rga);
  var result = await fetch("http://fundacaoeducadionalwilliams.shop:8080/dashboard/delete", {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
    Authorization: 'Bearer ' + localStorage.getItem('access'),
  },
  body: JSON.stringify({ 
    rga: rga
  }),
  // ...
});
window.location.reload();
}

  return (
<div id='inicio' className=''>
<section id='' className='pt-24 py-56 justify-self-center'>
  <div className='text-2xl pt-12'>
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Adicionar Aluno</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm pb-16">
    <form onSubmit={handleSubmit} class="space-y-6" action="" method="POST">
      <div>
        <label for="rga" class="block text-sm/6 font-medium text-gray-900">RGA</label>
        <div class="mt-2">
          <input required type="text" name="rga" onChange={validateCpf} maxLength={9} id="rga" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#014BAE] sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <label for="cpf" class="block text-sm/6 font-medium text-gray-900">CPF</label>
        <div class="mt-2">
          <input required type="text" onChange={handleChangeMask} value={valor} name="cpf" id="cpf" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#014BAE] sm:text-sm/6"/>
        </div>
      </div>
      
      <div>
        <label for="nome" class="block text-sm/6 font-medium text-gray-900">Nome Completo</label>
        <div class="mt-2">
          <input required type="text" name="nome" id="nome" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#014BAE] sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <label for="turma" class="block text-sm/6 font-medium text-gray-900">Turma</label>
        <div class="mt-2">
          <input required type="text" name="turma" id="turma" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#014BAE] sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <label for="registro" class="block text-sm/6 font-medium text-gray-900">Mês de Registro</label>
        <div class="mt-2">
          <input required type="month" name="registro" id="registro" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#014BAE] sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <label for="formacao" class="block text-sm/6 font-medium text-gray-900">Mês de Formação</label>
        <div class="mt-2">
          <input required type="date" name="formacao" id="formacao" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#014BAE] sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-[#014BAE] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#285591] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#014BAE]">Adicionar</button>
      </div>
    </form>
  </div>

 
    </div>
    <PaginationButtons/>
</section>

    </div>

  )
}

export default Dashboard