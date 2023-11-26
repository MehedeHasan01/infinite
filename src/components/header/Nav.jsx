import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Logo from '../images/header/logo.png';
import { useState } from "react";

const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
<nav className="bg-white max-w-screen-2xl mx-auto  md:px-8 lg:px-16 shadow-md sticky top-0 z-20 ">
  <div className="  flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={Logo} className="w-[12rem]" alt="Flowbite Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" onClick={()=> setOpen(!open)} className="inline-flex  items-center p-1 w-14 h-12 justify-center text-sm text-gray-500 rounded-full shadow-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-500 dark:hover:bg-gray-100 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <div className="text-3xl">
        {
            open ? <IoClose/> : <IoMenu/>
        }
        </div>

    </button>
    <div className={` ${!open && 'hidden'} delay-1000  w-full md:block md:w-auto`} id="navbar-default">
      <div className="font-bold  flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-10 rtl:space-x-reverse  md:mt-0    text-black items-center ">
        <button className='bg-transparent hover:-translate-y-1 px-2 py-3 transition duration-10 delay-100'>
        <a href="#" className="block py-2 px-3   md:bg-transparent  md:p-0  " aria-current="page">Roles</a>
        </button>
        <button className='bg-transparent hover:-translate-y-1 px-2 py-3 transition duration-10 delay-100'>
        <a href="#" className="block py-2 px-3   md:bg-transparent  md:p-0  " aria-current="page">Pricing</a>
        </button>
        <button className='bg-[#003BFF] hover:bg-[#0237e2]   hover:-translate-y-1 px-3 py-2  shadow-lg  md:px-4 md:py-3 hover:shadow-md  transition duration-10 delay-100 rounded-lg text-white'>
        <a href="#" className="block  px-2   " aria-current="page">Start Hiring</a>
        </button>
      </div>
    </div>
  </div>
</nav>




    );
};

export default Nav;