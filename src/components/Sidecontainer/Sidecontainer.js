import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Sidecontainer.css';
import image from '../../image/my-image.jpg';
const Sidecontainer = ({ times }) => {
  const [isActive, setIsActive] = useState(false);;

  const notify = () => {
    toast("Wow Gym Activity Completed!");
    setIsActive(current => !current);
  };

  let toggleChangeClass = isActive ? 'btn-success' : 'btn-primary';


  const breakTimes = [10, 20, 30, 40, 50];

  const [breaks, setBreaks] = useState(0)


  const getBreaktime = (time) => {
    setBreaks(time);
    localStorage.setItem('Breaks', time);
  }




  useEffect(() => {
    const previousBreaks = localStorage.getItem('Breaks')

    if (previousBreaks) {
      setBreaks(previousBreaks)
    }
  }, [])


  return (
    <div className='px-6 pt-6'>
      <div className='lg:flex mt-10 md:mt-0 lg:items-center gap-4'>
        <div className='flex lg:flex-none  justify-center'>
          <img className='w-20 h-20 rounded-full' src={image} alt="afnan" />
        </div>
        <div className=' text-center lg:text-start'>
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

      <h2 className='my-8 text-3xl font-semibold'>Add A Break</h2>
      <div className='bg-[#F2F4FA] flex justify-around gap-1 px-2 py-4 rounded-md'>

        {
          breakTimes.map(breakTime => (
            <button key={breakTime} onClick={() => getBreaktime(breakTime)} className='btn btn-outline btn-primary  w-12 h-10 rounded-full'>{breakTime}S</button>
          ))
        }
      </div>

      <h2 className='my-8 text-3xl font-semibold'>Exercise Details</h2>
      <div className='flex justify-between items-center bg-[#F2F4FA]   p-6 rounded-md'>
        <h2 className='text-xl font-semibold'>Exercise time </h2>
        <p className='text-lg'><span>{times}</span> seconds</p>
      </div>
      <div className='flex justify-between items-center bg-[#F2F4FA]   p-6 rounded-md mt-5 mb-10'>
        <h2 className='text-xl font-semibold'>Break time </h2>
        <p className='text-lg'><span>{breaks}</span> seconds</p>
      </div>
      <button onClick={notify} className={`btn ${toggleChangeClass} w-full capitalize text-xl`}>Activity Completed</button>
      <ToastContainer />
    </div>
  );
};

export default Sidecontainer;