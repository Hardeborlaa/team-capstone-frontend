import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";



const Navbar = () => {
  // const [nav, setNav] = useState(false)
  // const handleNav = () => {
  //   setNav (!nav)
  // }

  return (
    <div className='w-full h-[90px] '>
      <div className='max-w-[1240px] mx-auto px-4 flex  justify-between align-center items-center h-full'>
        <div>
          <h1 className='text-2xl font-bold '>TRACE</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex'>
            <li className='mx-3'>HOME</li> 
            <li className='mx-3'>SHOP</li>
            <li className='mx-3'>LOOKBOOK</li>
          </ul>
        </div>
        <div className='flex'>
          {/* <img src={} alt="" />  */}
          <CiSearch size={25} className='mx-3'/>
          <CiHeart size={25} className='mx-3' />
          <CiShoppingCart size={25} className='mx-3' />

        </div>
      </div>

    {/* Hamburger menu */}
      {/* <div onClick={handleNav} className='block md:hidden'>
        
       {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white'/>}  
     
      </div> */}

      {/* Mobile menu */}

      {/* <div className= {nav ? ' w-full bg-blue-300 text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>

      </div> */}


   </div>

    
  )
}

export default Navbar