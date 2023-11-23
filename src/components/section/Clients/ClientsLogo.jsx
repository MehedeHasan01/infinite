import clientsLogo1 from '../../images/clients/e-sports.png'
import clientsLogo2 from '../../images/clients/kidz-land.png'
import clientsLogo3 from '../../images/clients/momo-mama.png'
import clientsLogo4 from '../../images/clients/okay-homes.png'
import clientsLogo5 from '../../images/clients/rio-lounge.png'
import clientsLogo6 from '../../images/clients/sweets-cloud.png'
import clientsLogo7 from '../../images/clients/upside-down.png'

const ClientsLogo = () => {
    return (
        <div className='px-8 md:px-16 lg:px-72'>
            <div className="py-14 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 ">
            <div><img src={clientsLogo1} alt="" className='w-[90%] hover:bg-[#003cffa6] rounded-full' /></div>
            <div><img src={clientsLogo2} alt=""  className='w-[90%] hover:bg-red-200 rounded-full' /></div>
            <div><img src={clientsLogo3} alt="" className='w-[90%] hover:bg-red-400 rounded-full' /></div>
            <div><img src={clientsLogo4} alt="" className='w-[90%] hover:bg-green-200 rounded-full' /></div>
            <div><img src={clientsLogo5} alt="" className='w-[90%] hover:bg-gray-200 rounded-full' /></div>
            <div><img src={clientsLogo6} alt="" className='w-[90%] hover:bg-slate-300 rounded-full' /></div>
            <div><img src={clientsLogo7} alt="" className='w-[90%] hover:bg-white  rounded-full' /></div>
        </div>
        </div>
    );
};

export default ClientsLogo;