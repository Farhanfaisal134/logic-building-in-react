import React, { useState } from 'react'

const StepProgressBar = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  return (
    <div
      className='flex flex-col gap-4 max-w-6xl mx-auto items-center mt-10'>
      <h1 className='font-bold text-2xl'>Step Progress Bar</h1>
      <MultiSteps
        setActiveStep={setActiveStep}
        steps={steps}
        activeStep={activeStep}
      />
    </div>
  )
};

const MultiSteps = ({ steps, activeStep, setActiveStep }) => {
  function handlePreviousStep() {
    setActiveStep((prevStep) => prevStep - 1);
  };

  function handleNextStep() {
    setActiveStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <div className="bg-gray-300 p-2 w-full flex text-white text-xl">
        {
          steps && steps.length > 0
            ? steps.map((stepItem, index) => (
              <div
                key={index}
                className={`px-4 py-2 w-full rounded-md flex justify-center 
                  transition-colors duration-500 ease-in-out
                ${index <= activeStep ? "bg-green-600" : "bg-blue-700"}`}
              >
                {stepItem}
              </div>
            ))
            : null
        }
      </div>
      <div className="flex gap-10">
        <button
          className={`px-4 py-2 rounded-md border-2 border-gray-500 text-xl font-bold 
          ${activeStep === 0 ? "bg-gray-400 cursor-not-allowed text-white" : "bg-yellow-300"}`}
          onClick={handlePreviousStep}
          disabled={activeStep === 0}>
          Prev
        </button>

        <button
          className={`px-4 py-2 rounded-md border-2 border-gray-500 text-xl font-bold 
         ${activeStep === steps.length - 1 ? "bg-gray-400 cursor-not-allowed text-white" : "bg-yellow-300"}`}
          onClick={handleNextStep}
          disabled={activeStep === steps.length - 1}>
          Next
        </button>
      </div>
    </>
  )
};

export default StepProgressBar