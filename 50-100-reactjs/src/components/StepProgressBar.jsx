import React, { useState } from 'react'

const StepProgressBar = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  return (
    <div className='p-8 w-full flex items-center gap-3 flex-col'>
      <h1 className='text-2xl font-bold'>Step Progress Bar</h1>
      <div className='w-full max-w-3xl mx-auto bg-gray-500 p-2'>
        <div className='flex justify-center flex-shrink-0'>
          {
            steps.map((step, idx) => (
              <div key={idx} className={`w-full text-white p-1 rounded-md flex justify-center 
                transition-colors duration-300 ease-in-out
                ${idx <= activeStep ? "bg-green-500" : "bg-blue-500"}`}>{step}</div>
            ))
          }
        </div>

      </div>

      <div className='flex gap-4'>
        <button
          onClick={() => setActiveStep(activeStep - 1)}
          disabled={activeStep === 0}
          className={`bg-blue-500 px-3 py-1 text-white rounded-md text-xl 
          disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-black`}>Prev</button>
        <button
          onClick={() => setActiveStep(activeStep + 1)}
          disabled={activeStep === steps.length - 1}
          className={`bg-blue-500 px-3 py-1 text-white rounded-md text-xl 
          disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-black`}>Next</button>
      </div>
    </div>
  )
};

export default StepProgressBar;