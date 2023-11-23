import ServicesCard from "./ServicesCard";
import { FaArrowRightLong } from "react-icons/fa6";
import RiskFreeHiring from '../../images/services2/risk-free-hiring.webp'
import QualityCandidates from '../../images/services2/two-weeks-delivery.webp'
import  ExtensiveExperience  from '../../images/services2/candidate-experience-vintti.webp';
import DedicatedTeam from '../../images/services2/dedicated-team-at-vintti.webp';
import EndtoEndManagement from '../../images/services2/hassle-free-2.webp';
import TwoWeeksDelivery  from '../../images/services2/top-candidates-vintti.webp';

const Services = () => {
    return (
        <div>

            <h1 className="text-center py-16 bg-[#003BFF] font-bold text-white text-4xl"> We are here to simplify that process. </h1>
            <p className="py-12 text-[#333379b7] text-lg text-center">We not only identify the ideal candidates, but also <br /> handle all formalities, from hiring to managing their <br /> payment. In this way, we become your strategic ally, <br /> simplifying your business growth.</p>

            <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-16 lg:px-28 gap-7">
            <ServicesCard
            img={RiskFreeHiring}
            title={`Risk-Free Hiring`}
            details={`Our selection process is 100% free. You only pay if you hire, making our service an absolutely risk-free and effective solution to your staffing needs.`}
            ></ServicesCard>
            {/* Card 2 */}
            <ServicesCard
            img={TwoWeeksDelivery}
            title={`Two-Weeks Delivery`}
            details={`We strive to find your ideal candidate within two weeks. Our efficient process is designed to minimize the waiting time for the perfect match.`}
            ></ServicesCard>
            {/* Card 3 */}

            <ServicesCard
            img={QualityCandidates}
            title={`Quality Candidates`}
            details={`Access our vast database of carefully vetted candidates. Each individual is meticulously selected to ensure they align with your business objectives and culture.`}
            ></ServicesCard>
            {/* Card 4 */}

            <ServicesCard
            img={ExtensiveExperience}
            title={`Extensive Experience`}
            details={`Our experience in the financial and accounting recruitment sector are at your disposal. We leverage our knowledge to find the best match for your needs.`}
            ></ServicesCard>
            {/* Card 5 */}

            <ServicesCard
            img={EndtoEndManagement}
            title={`End-to-End Management`}
            details={`We absorb the administrative load. From contract creation to payment management, we oversee every detail, freeing you up to concentrate on your business's core operations.`}
            ></ServicesCard>

            <ServicesCard
            img={DedicatedTeam}
            title={`Dedicated Team`}
            details={`Your success is our mission. Our dedicated team is fully committed to support and guide your business towards achieving its goals.`}
            ></ServicesCard>

            </div>

            <div className="px-5 py-2 rounded-full  w-fit mx-auto flex items-center gap-1 transition duration-10 delay-100 hover:-translate-y-1  text-[#003BFF] hover:text-[#4069ee] mt-2 bg-[#DFEAFE]">

                <button className=" font-semibold  "><a href="#">Book a FREE 15-minute call</a> </button>
                <p className=' mt-1 '>{<FaArrowRightLong />}</p>

            </div>

        </div>
    );
};

export default Services;