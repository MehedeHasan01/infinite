import testimonials from '../../images/testimonials/asif-khan.png'
import onlineTaxman from '../../images/testimonials/online-taxman.webp'
import { FaArrowRightLong } from "react-icons/fa6";
const CaseStudiesCard = () => {
    return (
       <>
       <div className="card card-compact md:card-side flex flex-col md:flex-row  bg-white shadow-xl  gap-5">
            <figure  ><img src={testimonials} alt="Shoes" className=' w-full md:w-[23rem] h-full '  /></figure>
            <div className="card-body flex-1 px-8 py-8">
                <div className="card-title">
                    <img src={onlineTaxman} alt="" className='bg-white w-[10rem] my-3' />
                </div>
                <h2 className='text-[#363636] text-2xl font-bold'>See how Onlinetaxman dramatically cut recruitment costs by 40% with Vintti</h2>
                <p className='text-[#333379b7]  font-semibold mt-3 md:text-xl'>“OnlineTaxman has been hiring professional from around the world since we started but as the company starts to expand and recruitments need become more specific, the added costs of finding the right candidate are becoming unmanageable for our operation”</p>
                <p className=' text-[#000058] font-bold md:text-xl mt-2' >Vincenzo Villamena, CEO</p>
                <div className="card-actions  w-fit flex items-center gap-1 transition duration-10 delay-100 hover:-translate-y-1  text-[#003BFF] hover:text-[#4069ee] mt-2">
                <button className=" font-bold md:text-lg">Learn more </button>
                <p className=' mt-1 '>{<FaArrowRightLong />}</p>

                </div>
            </div>
        </div>
       </>
    );
};

export default CaseStudiesCard;