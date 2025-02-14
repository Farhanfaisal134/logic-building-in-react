import React, { useState } from 'react'
import StepProgressBar from './StepProgressBar';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  return (
    <div
      className='flex flex-col gap-4 max-w-6xl mx-auto items-center mt-10'
    >
      <h1 className='font-bold text-2xl'>Step Progress Bar</h1>
      <StepProgressBar
        setActiveStep={setActiveStep}
        steps={steps}
        activeStep={activeStep}
      />
    </div>
  )
}

export default App;