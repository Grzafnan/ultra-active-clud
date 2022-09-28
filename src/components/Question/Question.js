import React from 'react';
import './Question.css';
const Question = () => {
  return (
    <div className=''>
      <h1 className='text-3xl font-semibold text-center mb-8'>FQA</h1>
      <div className='w-[80%] mx-auto'>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
            <p className='text-xl font-semibold'>How doex react work?</p>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p className='py-4 px-2 '>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
              A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</p>
          </div>
        </div>
        <div className="collapse my-5">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
            <p className='text-xl font-semibold'>Difference Between Props and State React?</p>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p className='py-4 px-2 '>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
          </div>
        </div>
        <div className="collapse my-5">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
            <p className='text-xl font-semibold'>What is the Purpose of useEffect Hook without Data Load?</p>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p className='py-4 px-2 '>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates.If you’re familiar with React class lifecycle methods,you can think of useEffect Hook as componentDidMount,componentDidUpdate, and componentWillUnmount combined.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;