import React from 'react';

const Summary = () => {
  return (
    <div>
      <div className='mx-auto py-8'>
        <h1 className='text-3xl font-bold text-center mb-6'> Summary</h1>
        <p className='px-14 text-xs text-justify font-semibold mb-6'>
          {' '}
          The age group 25-34, particularly male users, is the most active
          demographic. August 4, 2024, saw the highest overall activity, though
          the high bounce rate suggests a need for more engaging content or
          improved user experience on that day.
        </p>
      </div>
    </div>
  );
};

export default Summary;
