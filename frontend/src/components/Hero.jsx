import React from 'react'
import { assets } from '../assets/assets'

const hero = () => {
  return (
    <div class="relative">
                <img class="w-full h-[40rem] md:h-[65rem] brightness-50 object-cover" src={assets.hero} />
            <div class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className='py-[25rem] w-full flex flex-col center place-items-center place-content-center'>
                        <div className='bg-transparent flex items-center py-10 sm:py-0 flex-col'>
                        <h1 className=' text-white bg-transparent font-semibold text-center md:text-2xl text-sm'>Qualificação de ponta ao seu alcance</h1>
                        <h1 className=' text-white bg-transparent font-bold md:text-4xl text-center text-xl pb-6'>FUNDAÇÃO EDUCACIONAL WILLIAMS</h1>
                        <h1 className=' text-white bg-transparent md:text-base text-center text-xs pb-6'>Bem-vindo à Fundação Educacional Williams! Aqui você pode verificar a autenticidade de alunos formados em nossos cursos. Nossa plataforma garante transparência e confiabilidade na certificação educacional</h1>
                        <a href='#consulta' type="button" className="text-white font-medium duration-300 hover:scale-105 bg-[#014BAE] focus:ring-4 focus:outline-none rounded-lg text-xs px-7 py-4 text-center me-2 mb-2 w-[16rem] md:w-[15rem]">Consultar Aluno</a>
                    </div>  
                </div>
            </div>
    </div>
    
  )
}

export default hero