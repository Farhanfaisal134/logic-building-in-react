import React from 'react'

const DisplaySelectedRadio = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = React.useState("");

  return (
    <div className="p-4">
      {options.map((option, index) => (
        <label key={index} className="block mb-2">
          <input
            type="radio"
            name="options"
            value={option}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mr-2"
          />
          {option}
        </label>
      ))}
      <input
        type="text"
        value={selectedOption}
        readOnly
        className="border p-2 mt-4"
      />
    </div>
  )
}

export default DisplaySelectedRadio