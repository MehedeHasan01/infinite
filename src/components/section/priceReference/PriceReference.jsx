import ReferenceImg1 from '../../images/PriceReference/accountant.webp';
import ReferenceImg2 from '../../images/PriceReference/managers.webp';
import ReferenceImg3 from '../../images/PriceReference/accountant (2).webp';
import ReferenceImg4 from '../../images/PriceReference/accountant (3).webp';
import { Carousel } from 'flowbite-react';
import PriceReferenceImg from './PriceReferenceImg';

const PriceReference = () => {
    return (
        <div>


            <div className=" md:my-5 py-3">

            <h1 className='text-center text-4xl my-20 font-bold ' >
                <span className='text-[#003BFF]' >Save up  to 60%</span>
                <span className='text-[#000058] ' > in payroll</span>
            </h1>

            </div>

           <div className='flex flex-col md:flex-row px-2  md:px-32 items-center '>

           <div className='w-full h-[18rem] md:h-[20rem] px-6 md:w-[37rem]  my-5 '>
            <Carousel slideInterval={5000} >

                <PriceReferenceImg img={ReferenceImg1} ></PriceReferenceImg>
                <PriceReferenceImg img={ReferenceImg2} ></PriceReferenceImg>
                <PriceReferenceImg img={ReferenceImg3} ></PriceReferenceImg>
                <PriceReferenceImg img={ReferenceImg4} ></PriceReferenceImg>

            </Carousel>
            </div>


            <div className='px-6 md:px-0 flex-1 md:pl-28 space-y-6'>
                <div className='flex gap-3 items-center' >

                <span className="icon" data="{'type': 'abstractIcon', 'emojiSrc': '1f381.svg', 'uploadedSrc': '', 'lineaIconSrc': '', 'abstractIconId': '12', 'uploadedHeight': 30}">

                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#BBBEC3" className="fill-bg-light" cx="20" cy="20" r="20"></circle><path fill="#111" className="fill-primary" d="M25 26h3v-7.67h-3zM12 26h3v-7.67h-3z"></path><path fill="#111111" className="fill-main" d="M16 26h8v-9.6L20 14l-4 2.4z"></path></g></svg>
                </span>
                <p className='ml-2 font-semibold text-gray-800 text-xl'>COST REFERENCE</p>
                </div>
                <p className='text-lg text-slate-600 pb-5'>
                Discover top-notch professionals from cost-effective locations. Up to 60% savings in salaries compared to US-based professionals.
                </p>
            </div>

           </div>


        </div>
    );
};

export default PriceReference;