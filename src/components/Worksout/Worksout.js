import React from 'react';

const Worksout = ({ workout, handleTimes }) => {

  const { id, name, details, img, time } = workout;

  const getTimes = (time) => {
    handleTimes(time)
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img className='h-[200px] w-full' src={img} alt="Shoes" /></figure>
      <div className="card-body py-5">
        <h2 className="card-title">{name}</h2>
        <p>{details ? details.slice(0, 90) + '...' : 'lorem ipsum'}</p>
        <p className='font-semibold'>Time required: {time}s</p>

        <button onClick={() => getTimes(time)} className="btn btn-primary">Add To List</button>

      </div>
    </div>
  );
};

export default Worksout;