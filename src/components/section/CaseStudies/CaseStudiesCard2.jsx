import testimonials2 from '../../images/testimonials/jahin-absar-alvi.png'
import bradyCfos from '../../images/testimonials/brady-cfo.webp'
import { FaArrowRightLong } from 'react-icons/fa6';

const CaseStudiesCard2 = () => {
    return (
        <>
        <div className="card card-compact md:card-side flex flex-col md:flex-row  bg-white shadow-xl gap-5">
            <figure  ><img src={testimonials2} alt="Shoes" className=' w-full md:w-[23rem] h-full '  /></figure>
            <div className="card-body flex-1 px-8 py-8">
                <div className="card-title">
                    <img src={bradyCfos} alt="" className='bg-white  h-[4rem] my-3' />
                </div>
                <h2 className='text-[#363636] text-2xl font-bold'> BradyCFOs Smart Hire: Saving 60% on Recruitment Costs</h2>
                <p className='text-[#333379b7]  font-semibold mt-3 md:text-xl'>BradyCFO, a Fractional CFO Service provider for American food businesses, needed a new senior Finance manager. But high recruitment costs were a challenge. By reaching out to Vintt’s outsourced staffing services, BradyCFO saved a huge 60% on recruitment costs.</p>
                <p className=' text-[#000058] font-bold md:text-xl mt-2' >Read the story in our company blog.</p>
                <div className="card-actions  w-fit flex items-center gap-1 transition duration-10 delay-100 hover:-translate-y-1  text-[#003BFF] hover:text-[#4069ee] mt-2">
                <button className=" font-bold md:text-lg">Learn more </button>
                <p className=' mt-1 '>{<FaArrowRightLong />}</p>

                </div>
            </div>
        </div>
        </>
    );
};

export default CaseStudiesCard2;