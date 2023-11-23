
// import PropTypes from 'prop-types';
import { FaArrowRightLong } from "react-icons/fa6";


const ContackCard2 = ({image, title, details, badge}) => {
    return (
        <div className="flex flex-col-reverse md:flex-row  md:gap-32 items-center my-20">

        <div className="md:mt-0 mt-8" ><img src={image} alt="" /></div>



        <div className=' md:w-[35%] md:px-0 px-8'>
            <h1 className="font-bold text-4xl text-[#363636] mb-3">{title}</h1>
            <p className="text-[#333379b7] text-lg mb-10 md:mb-16">
                {details}
           </p>
           <div className=" w-fit flex items-center gap-1 transition duration-10 delay-100 hover:-translate-y-1  text-[#003BFF] hover:text-[#4069ee] mt-2">

            <button className=" font-bold text-sm"><a href="#">{badge} </a> </button>
            <p className=' mt-1 '>{ badge && <FaArrowRightLong />}</p>
            </div>
        </div  >
    </div>
    );
};

// ContackCard2.propTypes = {
//     title: PropTypes.object,
//     details: PropTypes.object,
//     badge: PropTypes.object
// };

export default ContackCard2;