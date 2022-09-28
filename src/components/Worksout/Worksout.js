import React from 'react';

const Worksout = ({ workout }) => {
  console.log(workout);
  const { id, name, details, img, time } = workout;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img className='h-[200px] w-full' src={img} alt="Shoes" /></figure>
      <div className="card-body py-5">
        <h2 className="card-title">{name}</h2>
        <p>{details ? details.slice(0, 90) + '...' : 'lorem ipsum'}</p>
        <p className='font-semibold'>Time required: {time}</p>

        <button className="btn btn-outline btn-primary">Add To List</button>

      </div>
    </div>
  );
};

export default Worksout;