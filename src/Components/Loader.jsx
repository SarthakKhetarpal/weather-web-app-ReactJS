import React from 'react';
import LoaderAnimation from '../assets/loading.gif';

export const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-screen">
        <img src={LoaderAnimation} height="150px" width="150px" loading="lazy" />
        <p className='font-semibold text-lg'>
            Loading...
        </p>
    </div>
  )
}
