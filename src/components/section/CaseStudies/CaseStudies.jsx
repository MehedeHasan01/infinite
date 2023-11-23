import { Carousel } from "flowbite-react";
import CaseStudiesCard1 from "./CaseStudiesCard1";
import CaseStudiesCard2 from "./CaseStudiesCard2";

const CaseStudies = () => {
    return (
        <div className="my-24">
            <div className='lg:px-32 bg-[#003BFF] px-8 pt-14 pb-28 '>
            <h2 className='text-center text-4xl text-white pb-14 font-bold'>Case Studies</h2>
        <Carousel  slideInterval={5000}>
            <CaseStudiesCard1></CaseStudiesCard1>
            <CaseStudiesCard2></CaseStudiesCard2>

        </Carousel>
            </div>
        </div>
    );
};

export default CaseStudies;