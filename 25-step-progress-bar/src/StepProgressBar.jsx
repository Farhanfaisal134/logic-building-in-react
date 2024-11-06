import React from "react";
import Button from "./components/Button";

const StepProgressBar = ({ steps, activeStep, setActiveStep }) => {
  function handlePreviousStep() {
    setActiveStep((prevStep) => prevStep - 1);
  }

  function handleNextStep() {
    setActiveStep((prevStep) => prevStep + 1);
  }

  return (
    <>
      <div className="bg-gray-300 p-2 w-full flex text-white text-xl">
        {steps && steps.length > 0
          ? steps.map((stepItem, index) => (
            <div
              className={`px-4 py-2 w-full rounded-md flex justify-center 
                    transition-colors duration-500 ease-in-out
                  ${index <= activeStep ? "bg-green-600" : "bg-blue-700"}`}
            >
              {stepItem}
            </div>
          ))
          : null}
        ;
      </div>
      <div className="flex gap-10">
        <Button
          text="Prev"
          onClick={handlePreviousStep}
          disabled={activeStep === 0}
        />
        <Button
          text="Next"
          onClick={handleNextStep}
          disabled={activeStep === steps.length - 1}
        />
      </div>
    </>
  );
};

export default StepProgressBar;
