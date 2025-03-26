import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import OurPolicy from '../components/OurPolicy'
import {assets} from '../assets/assets'
import Title from '../components/Title'
import { Link, useNavigate } from 'react-router-dom'
import { cpfMask } from '../context/cpfMask'
import axios from "axios"

const Home = () => {
  const navigate = useNavigate();
    const [dataTable, setDataTable] = useState([]);
    const [result, setResult] = React.useState([]);
    const [parametro, setParametro] = useState([]);

    const [valor, setValor] = useState('')

function handleChangeMask(event) {
    const { value } = event.target;

    var hasNumber = /\d/;
    hasNumber.test("ABC"); // false
    hasNumber.test("Easy as 123"); // true

    if(value.length > 14){
      setValor(value);
    }
    else if(value.length > 10 && hasNumber.test(value)){
      setValor(cpfMask(value));
    }
    else{
      setValor(value);
    }
}
  
  const getUsers = async () => {
    
    var result = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + localStorage.getItem('access'),
      },
      // ...
    }).then(response => response.json())
    .then(data => {
      setDataTable(async () => {return data.body;});
      // Save the access token in a React state or state management system
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const {cpf } = e.target.elements
    try{
      const result = await axios.get('http://localhost:8080/check',{
        params: {
          cpf: cpf.value
        }
      })
      console.log(result.data.body)
        setDataTable(result.data.body);
    }
      catch{
      hideConsulta()
    }
  }

const showConsulta = () =>{
  let dataShow = document.querySelector("div.DataBase");
  dataShow.classList.remove('hidden');

  let erro = document.querySelector("h1.erroConsulta");
  erro.classList.add('hidden');
}

const hideConsulta = () =>{
  let dataShow = document.querySelector("div.DataBase");
  dataShow.classList.add('hidden');

  let erro = document.querySelector("h1.erroConsulta");
  erro.classList.remove('hidden');
}

  return (
    <div id='#inicio' className=''>
      <Hero/>
    <div className='py-24 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
  
<section id='' className='justify-self-center'>
<div className='text-2xl'>
      <div className='container lg:flex grid lg:grid-cols-3 md:grid-cols-1 items-center justify-items-center justify-around'>
        <div className='m-16'>
          <img className='rounded-2xl w-[250px] md:w-[420px] lg:w-[140rem] object-cover' src={assets.apresentacao} alt="" />
        </div>
      <div className='m-12 lg:m-20 text-center md:text-start'>
        <h1 className='font-semibold lg:text-3xl text-xl text-[#1E1E1E]'>Bem vindo ao portal do aluno</h1>
        <p className='py-6 text-lg text-[#1E1E1E]'>Acesse suas informações acadêmicas, consulte sua matrícula e acompanhe seu progresso na Fundação Educacional Williams. Estamos aqui para garantir que sua jornada de aprendizado seja prática, acessível e eficiente.</p>
      </div>
      </div>
  </div>
</section>

<section id='consulta' className='bg-white p-10 md:p-20 scroll-mt-20'>
  <div className='text-center place-items-center justify-self-center justify-items-center'>
    <Title text1={"Consulta de"} text2={"Alunos Formados"}/>
    <p>Entre em contato para consultas sobre alunos concluintes. Preencha os dados necessários e acesse informações importantes sobre sua formação.</p>
  </div>
  <h1 className='pt-12 text-center font-medium text-lg'>Insira as informações do aluno que deseja consultar</h1>
<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm duration-300 transition ease-in">
    <form onSubmit={handleSubmit} class="space-y-6" action="" method="POST">

      <h1 className='erroConsulta text-center text-red-600 py-2 hidden'>Aluno não encontrado</h1>
      <div>
        <label for="cpf" class="block text-sm/6 font-medium text-gray-900">Código de acesso <span className='text-xs'>(RGA, Nome Completo ou CPF)</span></label>
        <div class="mt-2">
          <input type="text" onChange={handleChangeMask} value={valor} name="cpf" id="cpf" class="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <button type="submit" onClick={showConsulta} class="flex w-full justify-center rounded-md bg-[#014BAE] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#285591] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Consultar Aluno</button>
      </div>
    </form>
  </div>
</section>
  </div>
  <div className="duration-300 ease-in-out transition DataBase hidden relative overflow-x-auto sm:rounded-lg place-items-center justify-self-center place-content-center pb-16">
    <Title text1={"Resultado da "} text2={"Consulta"}/>
    <table id='resultadoConsulta' class="shadow-md sm:rounded-lg w-[80rem] text-base text-left rtl:text-right text-gray-500">
        <thead class="text-base text-gray-700 bg-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    RGA
                </th>
                <th scope="col" class="px-6 py-3">
                    Nome
                </th>
                <th scope="col" class="px-6 py-3">
                    turma
                </th>
                <th scope="col" class="px-6 py-3">
                    Mês Registro
                </th>
                <th scope="col" class="px-6 py-3">
                    Mês Formação
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-gray-200 border-b border-gray-300 text-gray-700 hover:bg-gray-400 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {dataTable.rga}
                </th>
                <td class="px-6 py-4">
                    {dataTable.nome}
                </td>
                <td class="px-6 py-4">
                    {dataTable.turma}
                </td>
                <td class="px-6 py-4">
                    {dataTable.registro}
                </td>
                <td class="px-6 py-4">
                    {dataTable.formacao}
                </td>
            </tr>
        </tbody>
    </table>
</div>
  </div>
  )
}

export default Home