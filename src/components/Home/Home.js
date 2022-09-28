import React, { useEffect, useState } from 'react';
import Sidecontainer from '../Sidecontainer/Sidecontainer';
import Worksout from '../Worksout/Worksout';
import './Home.css';
const Home = () => {

  const [worksout, setWorksout] = useState([]);

  const [times, setTimes] = useState(0);

  const handleTimes = (time) => {
    const newTime = parseFloat(times) + parseFloat(time);
    setTimes(newTime)

    localStorage.setItem('Exercise', newTime)
  }


  useEffect(() => {
    const storedTime = localStorage.getItem('Exercise');
    if (storedTime) {
      setTimes(storedTime)
    }
  }, [])

  useEffect(() => {
    fetch('routine.json')
      .then(res => res.json())
      .then(data => setWorksout(data))
  }, [])


  return (
    <div >
      <div className='px-10 py-4 bg-[#F2F4FA]'>
        <div className='flex items-center'>
          <img className='w-20' src="https://www.chardomeng.com/wp-content/uploads/2016/11/gym-footer-logo.png" alt="workout-logo" />
          <h2 className='text-4xl font-semibold ml-4 italic'>Gym Workout Plan</h2>
        </div>
        <div className='mt-5'>
          <h3 className='text-2xl font-semibold italic text-center md:text-start'>Select today’s exercise</h3>
        </div>
      </div>

      <div className='workout-container grid md:grid-cols-12 mb-20'>
        <div className=' md:col-span-8 bg-[#F2F4FA] grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:px-14 py-2'>
          {
            worksout?.map(workout => <Worksout key={workout.id} workout={workout} handleTimes={handleTimes} />)
          }
        </div>

        <div className='bg-white grid md:col-span-4'>
          <Sidecontainer times={times} />
        </div>
      </div>

    </div>
  );
};

export default Home;