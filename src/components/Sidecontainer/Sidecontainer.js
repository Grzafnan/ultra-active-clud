import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Sidecontainer.css';
import image from '../../image/my-image.jpg';
const Sidecontainer = () => {
  return (
    <div className='px-6'>
      <div className='lg:flex lg:items-center gap-4'>
        <div className='md:flex  md:justify-center'>
          <img className='w-20 h-20 rounded-full' src={image} alt="afnan" />
        </div>
        <div className='md:text-center'>
          <h2 className='text-xl font-bold italic'>Shakil Ahmmed</h2>
          <span><FontAwesomeIcon className='mr-2 text-gray-500' icon={faLocationDot} />Rajshahi, Bangladesh</span>
        </div>
      </div>

      <div className='bg-[#F2F4FA] rounded-md p-2 flex justify-around items-center mt-10'>
        <div>
          <span className='text-3xl font-semibold'>50</span><span className='font-semibold'>kg</span>
          <p className='font-semibold'>Weight</p>
        </div>
        <div>
          <p className='text-3xl font-semibold'>5.6</p>
          <p className='font-semibold'>Height</p>
        </div>
        <div>
          <span className='text-3xl font-semibold'>22</span><span className='font-semibold'>yrs</span>
          <p className='font-semibold'>Age</p>
        </div>
      </div>

      <h2 className='my-10 text-3xl font-semibold'>Add A Break</h2>
      <div className='bg-[#F2F4FA] flex justify-around gap-1 px-2 py-4 rounded-md'>
        <button className='btn btn-outline btn-primary  w-12 h-10 rounded-full'>10S</button>
        <button className='btn btn-outline btn-primary  w-12 h-10 rounded-full'>20S</button>
        <button className='btn btn-outline btn-primary  w-12 h-10 rounded-full'>30S</button>
        <button className='btn btn-outline btn-primary  w-12 h-10 rounded-full'>40S</button>
        <button className='btn btn-outline btn-primary  w-12 h-10 rounded-full'>50S</button>
      </div>

      <h2 className='my-10 text-3xl font-semibold'>Exercise Details</h2>
      <div className='flex justify-between items-center bg-[#F2F4FA]   p-6 rounded-md'>
        <h2 className='text-xl font-semibold'>Exercise time </h2>
        <p className='text-lg'><span>0</span> seconds</p>
      </div>
      <div className='flex justify-between items-center bg-[#F2F4FA]   p-6 rounded-md mt-5 mb-10'>
        <h2 className='text-xl font-semibold'>Break time </h2>
        <p className='text-lg'><span>0</span> seconds</p>
      </div>
      <button className='btn btn-primary w-full capitalize text-xl'>Activity Completed</button>
    </div>
  );
};

export default Sidecontainer;