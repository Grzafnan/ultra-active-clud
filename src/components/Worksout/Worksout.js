import React, { useState } from 'react';

const Worksout = ({ workout, handleTimes }) => {
  const { id, name, details, img, time } = workout;

  const [buttonColor, setButtonColor] = useState(false);

  const [btnText, setBtnText] = useState('Add To List');

  const getTimes = (time) => {
    handleTimes(time);
    setButtonColor(buttonColor => !buttonColor);
    setBtnText("Added To List");
  }

  let toggleChangeClass = buttonColor ? 'btn-success' : 'btn-primary';

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img className='h-[200px] w-full' src={img} alt="Shoes" /></figure>
      <div className="card-body py-5">
        <h2 className="card-title">{name}</h2>
        <p>{details ? details.slice(0, 90) + '...' : 'lorem ipsum'}</p>
        <p className='font-semibold'>Time required: {time}s</p>

        <button className={`btn ${toggleChangeClass} w-full font-semibold`} onClick={() => getTimes(time)} >{btnText}</button>
      </div>
    </div>
  );
};

export default Worksout;