// import PropTypes from 'prop-types';


const ServicesCard = ({img, title, details}) => {
    return (
        <>
        <div className="card card-compact   bg-white drop-shadow-xl">
            <figure className='bg-[#003BFF] py-11'><img src={img} alt="Shoes" className='h-[5rem] w-[5rem]' /></figure>
         <div className="card-body mx-7">
         <h2 className="card-title font-bold text-xl my-3 text-[#363636]">{title}</h2>
            <p className='text-[#333379b7] text-base'>{details} </p>
         <div className="card-actions">
            <span></span>
            </div>
        </div>
        </div>
        </>
    );
};

// ServicesCard.propTypes = {
//     img: PropTypes.object,
//     title: PropTypes.object,
//     details: PropTypes.object
//
// };

export default ServicesCard;