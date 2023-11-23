// import PropTypes from 'prop-types';

const PriceReferenceImg = ({img}) => {
    console.log(img);
    return (
        <div>
            <img className='bg-white shadow-lg  w-full rounded-xl' src={img} alt="" />
        </div>
    );
};

// PriceReferenceImg.propTypes = {
//     img: PropTypes.object.isRequired
// };

export default PriceReferenceImg;