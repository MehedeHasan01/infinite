import ClientsCard from "./clientsCard";
import ClientsLogo from "./clientsLogo";
import { FaArrowRightLong } from "react-icons/fa6";


import ClientsImg1 from "../../images/clients2/client-success-stories.webp";
import ClientsImg2 from "../../images/clients2/offshore-remote-employee.webp";
import ClientsImg3 from "../../images/clients2/accoutning-candidate-(1).webp";

const Clients = () => {
    return (
        <>
        <ClientsLogo></ClientsLogo>
        <div className="py-10 bg-[#003BFF] px-8 md:px-16 lg:px-40">

            <h1 className="text-center text-white text-3xl font-bold  md:text-4xl mt-2 mb-12">
            The latest news from Vintti, and <br /> why it matters
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

            <ClientsCard
            img={ClientsImg2}
            title={`81% of Accounting Firms hired offshore employees in 2023`}
            details={`Discover why offshore employees has been an increasing trend over the past few years.`}
            ></ClientsCard>

            <ClientsCard
            img={ClientsImg1}
            title={`Onlinetaxman Saves 40% In Recruitment Costs With Virtual Staffing Solutions`}
            details={`Strategies to streamline hiring process and reduce costs.`}
            ></ClientsCard>

            <ClientsCard
            img={ClientsImg3}
            title={`10 Questions to Ask Your Accounting Candidates in 2024`}
            details={`Finding the ideal candidate goes beyond accounting skills and requires adaptability.`}
            ></ClientsCard>
            </div>

            <div className="pt-4">
            <div className="px-5 py-2 rounded-lg  w-fit mx-auto flex items-center gap-1 transition duration-10 delay-100 hover:-translate-y-1 hover:shadow-xl  text-white hover:bg-[#5073e486] bg-transparent">

            <button className=" font-semibold  "><a href="#">Browse all blog entries</a> </button>
            <p className=' mt-1 '>{<FaArrowRightLong />}</p>

            </div>
            </div>

        </div>
        </>
    );
};

export default Clients;