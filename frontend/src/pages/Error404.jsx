import React from 'react'
import Hero from '../components/Hero'
import OurPolicy from '../components/OurPolicy'
import {assets} from '../assets/assets'
import Title from '../components/Title'

const Error404 = () => {
  return (
    <div id='inicio' className=''>
<section id='' className='pt-24 justify-self-center'>
  <div className='text-2xl pt-12'>
        
        <div className='container drop-shadow-md rounded-2xl grid-cols-2 items-center grid justify-around'>
          <div className='m-16'>
            <img className='rounded-2xl w-[420px] object-cover animate-float' src={assets.erro} alt="" />
          </div>
        <div className='m-20 justify-items-center'>
        <Title text1={'ERRO'} text2={'404'}/>
          <h1 className='font-semibold text-center text-3xl pb-6'>Página Não Encontrada</h1>
          <a href='' type="button" className="text-white border-[#2F28AC] bg-[#2F28AC] hover:bg-white border-2 focus:outline-none font-medium rounded-full text-sm px-10 py-2.5 text-center me-2 mb-2 hover:text-black">Início</a>
          </div>

        </div>
    </div>
</section>

    </div>
  )
}

export default Error404