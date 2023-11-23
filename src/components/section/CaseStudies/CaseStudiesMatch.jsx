import Candidates from '../../images/candidate/hard-to-find-candidates.svg'
const CaseStudiesMatch = () => {
    return (
        <>
        <div className='flex justify-center items-center w-[90%] mx-auto gap-5 flex-col-reverse lg:flex-row'>
            <div >
                <img src={Candidates} alt="" className='w-[100%] ' />
            </div>
            <div className="space-y-3 flex-1">
                <h1 className="text-[#303030] font-extrabold text-3xl ">...but finding the perfect match can be tough.</h1>
                <p className="italic text-lg text-[#333379b7]">{"I've always had difficulty finding reliable accountants abroad, but they connected me with an exceptional professional!"}</p>
                <h3 className="text-[#303030] text-xl font-bold">Sarah Thompson, Business Owner</h3>
            </div>
        </div>
        </>
    );
};

export default CaseStudiesMatch;