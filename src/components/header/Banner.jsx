import BannerImg from '../images/header/hero.jpg'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div  >

            <div className="flex flex-col-reverse lg:flex-row justify-center items-center text-center lg:text-start ">
            <div className="space-y-8 mt-8 flex-1  lg:pl-16 lg:ml-5 md:px-0 px-10 md:mt-0 ">

            <div className=' text-5xl font-bold text-gray-800 '>
                <h2 > We Help You Hire
                <br />
                <TypeAnimation
        sequence={[
            ' Accounting',
            500,
            'Financial',
            500,
            ' Accounting',
        ]}
        wrapper="span"
        speed={{type: 'keyStrokeDelayInMs', value: 200}}
        repeat={Infinity}

        /> Talent
                <br />
                from South America
                </h2>
            </div>
                <p className='text-gray-700 font-medium text-lg ' >Find specialized talent that cost up to 60% less than <br /> typical in-house employees. Your go-to agency for <br /> top-tier remote staff from South America.</p>
                <button className=' bg-[#003BFF] hover:bg-[#0237e2] hover:-translate-y-1 w-full md:w-fit  md:px-6 py-3 md:py-3 hover:shadow-md  transition duration-10 delay-100 rounded-lg text-white '>
                <a href="#" className=" md:p-0   " aria-current="page">Start Hiring</a>
                </button>
                </div>
                <div className="  flex-1 lg:pr-16 lg:mr-5">

                    <img src={BannerImg} alt="" className='h-[88vh] w-[100%]'  />
                </div>
            </div>


        </div>
    );
};

export default Banner;