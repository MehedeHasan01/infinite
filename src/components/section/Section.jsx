import BuildingTeam from "./BuildingTeam/BuildingTeam";
import CaseStudies from "./CaseStudies/CaseStudies";
import CaseStudiesOther from "./CaseStudies/CaseStudiesOther";
import Clients from "./Clients/clients";
import ContackPart from "./ContackPart/ContackPart";
import SentMail from "./SentMail/SentMail";
import Services from "./Services/Services";
import PriceReference from "./priceReference/PriceReference";

const Section = () => {
    return (
        <div>
            <PriceReference></PriceReference>
            <CaseStudies></CaseStudies>
            <CaseStudiesOther></CaseStudiesOther>
            <Services></Services>
            <ContackPart></ContackPart>
            <Clients></Clients>
            <BuildingTeam></BuildingTeam>
            <SentMail/>
        </div>
    );
};

export default Section;