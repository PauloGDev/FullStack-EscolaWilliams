import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { cpfMask } from '../context/cpfMask'

const PaginationButtons = () =>{
    const [pageQtd, setPageQtd] = useState([]);
    var currentPage = 0;
    const navigate = useNavigate();
    const [dataTable, setDataTable] = useState([]);    
    const [valor, setValor] = useState('');
    const [visible, setVisible] = useState(true);

      useEffect(()=>{
        getUsers();
        getQtd();
      },[]);

      const handlePageClick = ({ selected }) => {
        currentPage = selected;
          console.log(currentPage);
        getUsers();
      }
      
      function handleChangeMask(event) {
          const { value } = event.target
            setValor(cpfMask(value));
      }
    
      const validateCpf = async (e) =>{
        var v = e.target.value;       
       if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
          e.target.value = v.substring(0, v.length-1);
          return;
       }
      }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const {rga, cpf, nome, turma, formacao, registro } = e.target.elements
        var result = await fetch("http://localhost:8443/dashboard/register", {
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
      
      const getUsers = async () => {
        var result = await fetch("http://localhost:8443/dashboard?page=" + currentPage, {
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + localStorage.getItem('access'),
          },
          // ...
        }).then(response => response.json())
        .then(data => {
            console.log(data);
          setDataTable(data);          // Save the access token in a React state or state management system
        });
      }

      const getUserBySearch = async (e) => {
        e.preventDefault();
        console.log(e.target.value.length);
        let dataShow = document.querySelector("div.paginate");
        dataShow.classList.add('hidden');
        if(e.target.value.length > 0){
            var result = await fetch("http://localhost:8443/getBy?search=" + e.target.value, {
              headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + localStorage.getItem('access'),
              },
              // ...
            }).then(response => response.json())
            .then(data => {
                console.log(data);
              setDataTable(data);          // Save the access token in a React state or state management system
            });
        }else{
            let dataShow = document.querySelector("div.paginate");
            dataShow.classList.remove('hidden');
            getUsers();
            getQtd();
        }
      }
      
      const deleteRow = async (e) =>{
        e.preventDefault();
        var rga = e.target.id;
        console.log(rga);
        var result = await fetch("http://localhost:8443/delete", {
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

    const getQtd = async () =>{
        var result = await fetch("http://localhost:8443/getQtd", {
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + localStorage.getItem('access'),
          },
          // ...
        }).then(response => response.json())
        .then(data => {
            setPageQtd(data/2);
          // Save the access token in a React state or state management system
        });
      }

  return (
    <div>
        <div className='mb-12'>
            <form class="max-w-md mx-auto">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Procurar</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                <input onInput={getUserBySearch} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-[#014BAE] " placeholder="Procurar por Nome, RGA ou Turma" required />
                </div>
            </form>
    </div>

         <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 bg-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    RGA
                </th>
                <th scope="col" class="px-6 py-3">
                    Nome
                </th>
                <th scope="col" class="px-6 py-3">
                    Turma
                </th>
                <th scope="col" class="px-6 py-3">
                    Mês Registro
                </th>
                <th scope="col" class="px-6 py-3">
                    Mês Formação
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Remover</span>
                </th>
            </tr>
        </thead>
        <tbody>
        {dataTable.map((d, i) => (
            <tr  key={i} class="bg-gray-200 border-b border-gray-300 text-gray-700 hover:bg-gray-400 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {d.rga}
                </th>
                <td class="px-6 py-4">
                    {d.nome}
                </td>
                <td class="px-6 py-4">
                    {d.turma}
                </td>
                <td class="px-6 py-4">
                    {d.registro}
                </td>
                <td class="px-6 py-4">
                    {d.formacao}
                </td>
                <td class="px-6 py-4 text-right">
                    <a href='' onClick={deleteRow} id={d.rga} class="font-medium text-red-600 dark:text-red-500 hover:underline">Remover</a>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

<div className='paginate'>
        <ReactPaginate
        breakLabel={<span className='mx-2'>...</span>}
        nextLabel={<span className='w-10 h-10 flex items-center justify-center bg-[#014BAE] text-white rounded-md'>
            <BsChevronRight/>
        </span>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageQtd}
        previousLabel={<span className='w-10 h-10 flex items-center justify-center bg-[#014BAE] text-white rounded-md'>
            <BsChevronLeft/>
        </span>}
        containerClassName='flex items-center justify-center mt-8 mb-4'
        pageClassName='w-10 h-10 flex items-center justify-center block rounded-md hover:bg-[#285591] hover:text-white mx-2'
        activeClassName='bg-[#014BAE] text-white'
        />
</div>
    </div>
  )
}

export default PaginationButtons