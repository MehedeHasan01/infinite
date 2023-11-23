// import { Datepicker } from 'flowbite-react';
// <div><Datepicker inline /></div>

import logo from '../../images/header/logo.png'

const BuildingTeam = () => {
    return (
        <>
        <div className="py-16">

            <div className="text-center mb-16">
                <h1 className="text-4xl text-[#363636] font-extrabold mb-4">Building your dream team starts <br /> with a simple call</h1>
                <p className="text-[#333379b7] text-lg">
                    Schedule your call today and let is take the first step to <br /> transform your business.
                </p>
            </div>

            <div className=' w-[90%] lg:w-[70%] mx-auto flex lg:flex-row flex-col drop-shadow-2xl'>


                <div className=" bg-[#003BFF] flex-1">
                    <div className='bg-white my-10 p-5 rounded-lg w-fit mx-auto'><img src={logo} alt="" className='w-[8rem]' /></div>
                    <h1 className='text-white text-center my-3 text-xl font-bold'>Book a meeting</h1>
                </div>
                <div className=" bg-white flex-1">
                    <h1 className='text-[#363636] text-lg m-4 font-semibold'>How long do you need?</h1>
                </div>






            </div>

        </div>

        </>
    );
};

export default BuildingTeam;