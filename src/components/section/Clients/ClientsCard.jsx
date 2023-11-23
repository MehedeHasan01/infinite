// import PropTypes from 'prop-types';


const ClientsCard = ({img, title, details}) => {
    return (
        <>
        <div className="card card-compact   bg-white drop-shadow-xl transition duration-10 delay-100 hover:-translate-y-1 cursor-pointer">
            <figure className=''><img src={img} alt="Shoes" className='h-[10rem] w-full' /></figure>
         <div className="card-body mx-2">
         <h2 className="card-title font-bold text-lg my-2 text-[#363636]">{title}</h2>
            <p className='text-[#333379b7] text-base'>{details} </p>
         <div className="card-actions">
            <span></span>
            </div>
        </div>
        </div>
        </>
    );
};

// ClientsCard.propTypes = {
//     img: PropTypes.object,
//     title: PropTypes.object,
//     details: PropTypes.object
//
// };

export default ClientsCard;