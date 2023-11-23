import { FaChevronDown } from "react-icons/fa";
import CaseStudiesMatch from "./CaseStudiesMatch";
const CaseStudiesOther = () => {
    return (
        <>
        <div className="pb-6">
            <h1 className="text-center font-extrabold text-[#303030] text-4xl">Did You Know?</h1>
            <p className="text-[#333379b7] text-center font-medium text-lg  mt-5 mb-8 mx-auto">You can secure high-quality accounting talent for a <br /> fraction of the US cost - in just 21 days. Heres what <br /> youll get:</p>
            <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-5 mb-8">
                <div className="space-y-4">
                    <h1 className="text-[#303030] font-bold text-2xl">US GAAP Proficiency</h1>
                    <div className="flex items-center gap-5 text-lg font-medium text-[#333379b7]">
                        <p>{<FaChevronDown/>}</p>
                        <p>
                        Top-notch professionals with solid background in US GAAP
                        </p>
                    </div>
                    <div className="flex items-center gap-5 text-lg font-medium text-[#333379b7]">
                        <p>{<FaChevronDown/>}</p>
                        <p>
                        Understanding of US accounting standards
                        </p>
                    </div>

                </div>
                <div className="space-y-4">
                    <h1 className="text-[#303030] font-bold text-2xl">
                    English Fluency Level
                    </h1>
                    <div className="flex items-center gap-5 text-lg font-medium text-[#333379b7]">
                        <p>{<FaChevronDown/>}</p>
                        <p>
                        Fluent English communication skills
                        </p>
                    </div>
                    <div className="flex items-center gap-5 text-lg font-medium text-[#333379b7]">
                        <p>{<FaChevronDown/>}</p>
                        <p>
                        Ability to write detailed, comprehensive reports in English
                        </p>
                    </div>

                </div>
                <div className="space-y-4">
                    <h1 className="text-[#303030] font-bold text-2xl">Cultural & Time Zone Fit</h1>
                    <div className="flex items-center gap-5 text-lg font-medium text-[#333379b7]">
                        <p>{<FaChevronDown/>}</p>
                        <p>Familiar with US business culture</p>
                    </div>
                    <div className="flex items-center gap-5 text-lg font-medium text-[#333379b7]">
                        <p>{<FaChevronDown/>}</p>
                        <p>Aligned with US time zones</p>
                    </div>
                    <div className="flex items-center gap-5 text-lg font-medium text-[#333379b7]">
                        <p>{<FaChevronDown/>}</p>
                        <p>Comfortable working in a US business environment</p>
                    </div>

                </div>
            </div>

            <CaseStudiesMatch/>


        </div>
        </>
    );
};

export default CaseStudiesOther;