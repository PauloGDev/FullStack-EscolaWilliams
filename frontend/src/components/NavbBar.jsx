import React, { useContext, useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import {Link} from 'react-router-dom'
import ScrollToTop from '../context/ScrollToTop';
import LoginButton from './LoginButton';


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [buttonText, setButtonText] = useState("");
  
  useEffect(() =>{
        const result = fetch("http://69.62.102.59:8090/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + localStorage.getItem('access'),
        },
        // ...
      }).then((response) => {
        if(response.status === 200){
          setButtonText("Logout");
          let btnShow = document.querySelectorAll('ul.btnLogin');
          btnShow.forEach(btn => {
              btn.classList.remove('hidden');
        })
        }else{
          setButtonText("Login");
          let btnShow = document.querySelectorAll('ul.btnLogin');
          btnShow.forEach(btn => {
              btn.classList.add('hidden');
        })
          
        }
      })
    },[]);

  return (
    <div id='navbar' className='bg-[#014BAE] flex items-center justify-around py-5 font-medium shadow-md'>
      <Link onClick={`${null? () => ScrollToTop():null}`} to='/'><img src={assets.logo} className='w-36 px-1' alt=""/></Link>
        <ul className='btnLogin gap-8 text-sm items-center text-white font-medium'>
        <LoginButton text={buttonText}/>
        </ul>
    </div>
  )
}

export default Navbar