import React from 'react'

const LoginButton = ({text}) => {

  const logout = () =>{
    localStorage.clear();
  }

  if(text === "Logout"){
    return (
      <div className=''>
        <a onClick={logout} href="/login" className=''><button  type="button" className="flex items-center text-white border-white hover:bg-white border-2 focus:outline-none font-medium rounded-full text-sm px-10 py-2.5 text-center me-2 mb-2 hover:text-black">Desconectar</button></a>
      </div>
    )
  }else{
    return (
      <div className='hidden'>
      </div>
    )
  }
  
}

export default LoginButton 