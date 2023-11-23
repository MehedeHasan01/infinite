import ContackCard1 from "./ContackCard1";
import ContackCard2 from "./ContackCard2";
import candidate1 from '../../images/candidate/candidate1.svg'
import candidate2 from '../../images/candidate/candidate2.svg'
import candidate3 from '../../images/candidate/candidate3.svg'
import candidate4 from '../../images/candidate/candidate4.svg'
import candidate5 from '../../images/candidate/candidate5.svg'
import candidate6 from '../../images/candidate/candidate6.svg'


const ContackPart = () => {
    return (
        <div className="bg-white max-w-screen-2xl mx-auto   md:px-8 lg:px-28 mt-14 py-14">
            <div>
            <ContackCard1
            image={candidate1}
            title={`With us...`}
            details={`You'll discover a world where top-notch professionals don't come with a hefty price tag. Yes, you heard it right! We're talking about a staggering 40% savings compared to comparable US professionals.`}
            badge={`Eager to save big on top talent? Let's chat!`}
            ></ContackCard1>

            <ContackCard2
            image={candidate2}
            title={`But it's not just about cost savings.`}
            details={`It's about the talent. Our professionals have a solid background in US GAAP. They are the 'A' players, equipped with a proven track record, ready to deliver 'A' results.`}
            badge={`Ready for the best? Let's chat!`}
            ></ContackCard2>

            <ContackCard1
            image={candidate3}
            title={`The beauty of it all?`}
            details={`They're just a timezone away. We understand the challenge that time differences can pose. That's why we've made it a point to select talent from regions that align with US time zones.`}
            badge={`Quality talent, your clock. Let's talk.`}
            ></ContackCard1>

            <ContackCard2
            image={candidate4}
            title={`Meet your new team member in just 2 weeks - for free`}
            details={`In addition, hiring is made simple and faster. With our efficient search and matching process, we can find the right fit for your business needs in just two weeks.`}
            badge={`Learn more about our hiring process`}
            ></ContackCard2>

            <ContackCard1
            image={candidate5}
            title={`But it's not just about cultural alignment; it's about building a united force`}
            details={`Our South American talent is not just familiar with the US business culture, they're a part of it. This makes working with clients or partners in the region smoother and more effective.`}
            badge={``}
            ></ContackCard1>

            <ContackCard2
            image={candidate6}
            title={`And don't worry about communication barriers.`}
            details={`At Vintti, English fluency is a standard. We only select candidates who possess strong and fluent English skills.`}
            badge={``}
            ></ContackCard2>

                <div className="text-center flex md:flex-row flex-col gap-5  items-center w-fit mx-auto" >
                <button className=' bg-[#003BFF] hover:bg-[#0237e2]  hover:-translate-y-1   px-7 py-3  hover:shadow-md  transition duration-10 delay-100 rounded-lg text-white font-semibold'>
                <a href="#" className=" md:p-0   " aria-current="page">Start interviewing</a>
                </button>
                <p className="text-[#333379b7] ">for free</p>
                </div>



            </div>
        </div>
    );
};

export default ContackPart;