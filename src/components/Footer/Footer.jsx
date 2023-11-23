import FooterLogo from '../images/header/footer-logo.png'
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
    return (
        <div className='w-full  py-10 px-8 md:px-16 lg:px-48 mx-auto bg-white'>
    <footer className="footer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  <aside className='lg:px-7 pr-3 lg:pr-7'>
    <div className=' bg-[#0075B4] p-2 rounded-lg'><a href="#" className='cursor-pointer'><img src={FooterLogo} alt="" className='' /></a></div>
    <a className="mt-2 cursor-pointer text-[#5A1868] hover:text-[#000058a9] font-semibold" href='#'>Vintti LLC. All rights<br/> reserved.</a>
  </aside>
  <nav>
    <header className="   text-[#000058] text-2xl font-bold pb-3">Services</header>
    <a className=" cursor-pointer text-[#5A1868] hover:text-[#000058a9] font-semibold" href='#'>Branding</a>
    <a className=" cursor-pointer text-[#5A1868] hover:text-[#000058a9] font-semibold" href='#'>Design</a>
    <a className=" cursor-pointer text-[#5A1868] hover:text-[#000058a9] font-semibold" href='#'>Marketing</a>
    <a className=" cursor-pointer text-[#5A1868] hover:text-[#000058a9] font-semibold" href='#'>Advertisement</a>
  </nav>
  <nav>
    <header className="text-[#000058] text-2xl font-bold pb-3">Company</header>
    <a className= " cursor-pointer text-[#5A1868] hover:text-[#000058a9] font-semibold">About us</a>
    <a className= " cursor-pointer text-[#5A1868] hover:text-[#000058a9] font-semibold">Contact</a>
    <a className= " cursor-pointer text-[#5A1868] hover:text-[#000058a9] font-semibold">Jobs</a>
    <a className= " cursor-pointer text-[#5A1868] hover:text-[#000058a9] font-semibold">Press kit</a>
  </nav>
  <nav>
    <header className="text-[#000058] text-2xl font-bold pb-3">LinkedIn</header>
    <a className=" cursor-pointer text-3xl text-[#0075B4] font-semibold" href='#'>
        {<BsLinkedin></BsLinkedin>}
    </a>

  </nav>
</footer>
<div className=''> <hr className='bg-[#0075B4] h-[2px]  my-10' />
<div className='flex justify-between  md:items-end flex-col md:flex-row'>
    <button className=' bg-[#003BFF] hover:bg-[#0237e2]  hover:-translate-y-1 w-fit  px-5 py-3  hover:shadow-md  transition duration-10 delay-100 rounded-lg text-white font-semibold'>
                    <a href="#" className=" md:p-0   " aria-current="page">Book a 15-minute call</a>
    </button>
    <div className='text-[10px] flex gap-2 '>
        <a href="#" className='cursor-pointer hover:text-[#5A1868] text-[#000058a9]'>Vintti LLC</a>
        <a href="#" className='cursor-pointer hover:text-[#5A1868] text-[#000058a9]'>651 N Broad St, Suite 201, Middletown, DE</a>
        <a href="#" className='cursor-pointer hover:text-[#5A1868] text-[#000058a9]'>Privacy Rules</a>
    </div>
</div>
</div>



 </div>
    );
};

export default Footer;