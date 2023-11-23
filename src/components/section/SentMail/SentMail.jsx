import { FaArrowRightLong } from "react-icons/fa6";


const SentMail = () => {
    return (
        <div className="py-16 bg-[#003BFF] px-8 md:px-16 lg:px-40">
            <h1 className="pt-4 text-center font-extrabold text-white text-4xl">Eager to Employ the Best?</h1>
            <p className="text-white font-medium text-center my-5">Leave Us Your Email and Let is Make It Happen!</p>

            <div className="w-fit mx-auto flex flex-col md:flex-row gap-5 mt-16">
                <input type="text" className="input input-primary pr-16px md:pr-28  py-2 rounded-lg text-white focus:blur-2 bg-[#2c50c7c2] border-2 border-gray-300 " placeholder="your@gmail.com" />

                <div className=" px-3 md:px-5 py-2 rounded-lg  flex items-center gap-1 transition duration-10 delay-100 hover:-translate-y-1  text-[#363636] w-fit bg-[#fff] ">
                <button className=" font-semibold text-sm "><a href="#">Start Hiring Today</a> </button>
                <p className=' mt-1 text-[#003BFF] '>{<FaArrowRightLong />}</p>

            </div>
            </div>
        </div>
    );
};

export default SentMail;