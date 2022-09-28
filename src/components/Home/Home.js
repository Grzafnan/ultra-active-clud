import React, { useEffect, useState } from 'react';
import Sidecontainer from '../Sidecontainer/Sidecontainer';
import Worksout from '../Worksout/Worksout';
import './Home.css';
const Home = () => {

  const [worksout, setWorksout] = useState([]);

  useEffect(() => {
    fetch('routine.json')
      .then(res => res.json())
      .then(data => setWorksout(data))
  }, [])


  return (
    <div className='mt-10'>
      <div className='px-10 py-4'>
        <div className='flex items-center'>
          <img className='w-20' src="https://www.chardomeng.com/wp-content/uploads/2016/11/gym-footer-logo.png" alt="workout-logo" />
          <h2 className='text-4xl font-semibold ml-4 italic'>Gym Workout Plan</h2>
        </div>
        <div className='mt-5'>
          <h3 className='text-2xl font-semibold'>Select today’s exercise</h3>
        </div>
      </div>

      <div className='workout-container px-10'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            worksout.map(workout => <Worksout workout={workout} />)
          }
        </div>

        <div >
          <Sidecontainer />
        </div>
      </div>

    </div>
  );
};

export default Home;