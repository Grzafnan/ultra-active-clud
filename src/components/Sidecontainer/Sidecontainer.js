import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Sidecontainer.css';
import image from '../../image/my-image.jpg';
const Sidecontainer = () => {
  return (
    <div>
      <div className='lg:flex lg:items-center gap-4'>
        <div className='md:flex  md:justify-center'>
          <img className='w-20 h-20 rounded-full' src={image} alt="afnan" />
        </div>
        <div className='md:text-center'>
          <h2 className='text-xl font-bold italic'>Shakil Ahmmed</h2>
          <span><FontAwesomeIcon className='mr-2 text-gray-500' icon={faLocationDot} />Rajshahi, Bangladesh</span>
        </div>
      </div>

      <div>
        <div>
          <p>50 <span>kg</span></p>
          <p>Weight</p>
        </div>
        <div>
          <p>5.6</p>
          <p>Height</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>


      {/* <div className='flex justify-between'>
        <button className='btn btn-outline btn-primary  w-12 h-10 rounded-full'>10S</button>
        <button className='btn btn-outline btn-primary  w-12 h-10 rounded-full'>20S</button>
        <button className='btn btn-outline btn-primary  w-12 h-10 rounded-full'>30S</button>
        <button className='btn btn-outline btn-primary  w-12 h-10 rounded-full'>40S</button>
        <button className='btn btn-outline btn-primary  w-12 h-10 rounded-full'>50S</button>
      </div> */}


    </div>
  );
};

export default Sidecontainer;