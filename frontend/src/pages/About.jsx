import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div id='#inicio' className=''>
    <div className='py-24 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
  
<section id='' className='justify-self-center'>
<div className='text-2xl pt-12 autoShowAnimationFade'>
      <div className='container drop-shadow-md rounded-2xl bg-white lg:flex grid lg:grid-cols-3 md:grid-cols-1 items-center justify-items-center justify-around'>
        <div className='m-16'>
          <img className='rounded-2xl w-[250px] md:w-[420px] lg:w-[520px] xl:w-[720px] max-w-[720px] object-cover' src={assets.about_land} alt="" />
        </div>
      <div className='m-12 lg:m-20 text-center lg:text-start justify-items-center'>
        <h1 className='font-semibold lg:text-3xl text-xl text-[#1E1E1E]'>Especializados em Desenvolvimento de Sites, Design e Branding</h1>
        <p className='py-6 text-base text-[#1E1E1E]'>Queremos que cada empresa tenha uma identidade visual memorável e uma presença online de alta performance, que gere resultados reais e agregue valor ao seu negócio.
        Quer fortalecer sua marca e impulsionar seu negócio com um design profissional e um site de alta qualidade? Entre em contato com a Digital Tricks e leve sua presença digital para o próximo nível!</p>
      </div>

      </div>
  </div>
</section>

  
<section id='' className='sec-1 justify-self-center'>
<div className='animate text-2xl pt-12'>
<Title text1={'Por Que Escolher a'} text2={'Digital Tricks?'} text3={'Com uma abordagem criativa e personalizada, a empresa combina estética e funcionalidade, garantindo que cada projeto atenda às necessidades específicas de seus clientes.'}/>
      <div className='container drop-shadow-md rounded-2xl text-center md:text-start bg-white lg:flex grid md:grid-cols-2 grid-cols-1 items-center place-items-center justify-around'>
      <div className='m-12 lg:m-20'>
        <div className='py-6'>
          <h1 className='font-semibold text-3xl text-[#1E1E1E]'>Soluções Personalizadas</h1>
          <p className='py-2 text-base text-[#1E1E1E]'>Criamos estratégias adaptadas às necessidades de cada cliente.</p>
        </div>
        <div className='py-6'>
          <h1 className='font-semibold text-3xl text-[#1E1E1E]'>Foco em Resultados</h1>
          <p className='py-2 text-base text-[#1E1E1E]'>Nosso trabalho é voltado para aumentar o alcance, engajamento e conversões da sua empresa.</p>
        </div>
        <div className='py-6'>
          <h1 className='font-semibold text-3xl text-[#1E1E1E]'>Atendimento Exclusivo</h1>
          <p className='py-2 text-base text-[#1E1E1E]'>Acompanhamos de perto cada etapa do seu projeto para garantir a melhor entrega.</p>
        </div>
      </div>
      <div className='m-16'>
          <img className='rounded-2xl md:w-[320px] lg:w-[720px] sm:w-[100px] object-cover' src={assets.monstro} alt="" />
        </div>

      </div>
  </div>
</section>

<section id='' className='sec-3 justify-self-center '>
  <div className='text-2xl pt-4 animate'>
<div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8'>
  <div className='lg:mt-6 mt-0'>
    <div className='py-5 container rounded-2xl bg-gradient-to-r shadow-xl from-[#251EA5] to-[#4F46E5] justify-around'>
          <div className='m-16 max-w-[500px] text-white'>
          <h1 className='font-semibold md:text-9xl text-7xl pb-6'>70%</h1>
          <p className='text-base font-medium'>dos consumidores preferem interagir com empresas que possuem um site profissional</p>
          </div>
    </div>
  </div>
 
 <div className=''>
  <div className='py-5 container rounded-2xl bg-gradient-to-r shadow-xl from-[#A5461E] to-[#CA46E5] justify-around '>
          <div className='m-16 max-w-[500px] text-white'>
          <h1 className='font-semibold md:text-9xl text-7xl pb-6'>23%</h1>
          <p className='text-base font-medium'>Empresas que investem em branding têm um crescimento 23% maior do que as que não investem</p>
          </div>
  </div>
 </div>

 <div className='lg:mt-6 mt-0'>
  <div className='py-5 container rounded-2xl bg-gradient-to-r shadow-xl from-[#4B1EA5] to-[#7B46E5] justify-around'>
          <div className='m-16 max-w-[500px] text-white'>
          <h1 className='font-semibold md:text-9xl text-7xl pb-6'>300%</h1>
          <p className='text-base font-medium'>Um site bem estruturado aparece até 300% a mais nas pesquisas do Google</p>
          </div>
  </div>
 </div>
 <div className=''>
 <div className='py-5 container rounded-2xl bg-gradient-to-r shadow-xl from-[#1E9CA5] to-[#2F28AC] justify-around '>
          <div className='m-16 max-w-[500px] text-white'>
          <h1 className='font-semibold md:text-9xl text-7xl pb-6'>200%</h1>
          <p className='text-base font-medium'>E-commerces bem desenvolvidos aumentam a taxa de conversão em até 200%</p>
          </div>
  </div>
</div>
  
</div>     
    </div>
</section>

<section id='faq' className='sec-1 py-16 '>
<div
    className="animate px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] container rounded-2xl drop-shadow-md bg-white items-center py-12 justify-self-center justify-around">
    <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">Principais Perguntas

            </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span className="group-open:text-[#2F28AC]">Quanto tempo leva para desenvolver um site?</span>
                        <span className="transition group-open:rotate-180 duration-500 ease-in-out">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:mt-3 duration-500 ease-in-out text-neutral-600">O prazo varia conforme a complexidade do projeto, mas, em média, um site institucional leva de 2 a 3 semanas para ser finalizado.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span className="group-open:text-[#2F28AC]">Vocês oferecem suporte após a entrega do site?</span>
                        <span className="transition group-open:rotate-180 duration-500 ease-in-out">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Sim! Oferecemos planos de manutenção para manter seu site atualizado, seguro e funcionando perfeitamente.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span className="group-open:text-[#2F28AC]">Em quanto tempo meu logotipo ou identidade visual ficam prontos?</span>
                        <span className="transition group-open:rotate-180 duration-500 ease-in-out">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Logotipo: 3 a 5 dias úteis.<br />Identidade Visual Completa: 7 a 10 dias úteis.<br />

O prazo pode variar conforme a complexidade do projeto e a necessidade de revisões.</p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span className="group-open:text-[#2F28AC]">O que está incluído no serviço de criação de Identidade Visual?</span>
                        <span className="transition group-open:rotate-180 duration-500 ease-in-out">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p id='contato' className="group-open:animate-fadeIn mt-3 text-neutral-600">Nosso serviço de Identidade Visual inclui desenvolvimento do conceito, definição de cores, tipografia e um manual de aplicação para garantir que sua marca tenha consistência visual.
                    </p>
                </details>
            </div>
        </div>
    </div>
</div>
</section>

  </div>
  </div>
  )
}

export default About