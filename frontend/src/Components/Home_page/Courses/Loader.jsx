import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" rounded-md h-9 shadow-lg shadow-slate-500 font-semibold bg-blue-400 w-24 m-3 p-1">Loading</div>
      <p className='  p-2 shadow-xl shadow-slate-600 m-2 rounded-lg font-semibold '>Courses are loading below</p>
    </div>
  );
};

export default Loader;
