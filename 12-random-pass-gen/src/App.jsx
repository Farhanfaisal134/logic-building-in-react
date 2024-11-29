import React, { useState } from 'react'
import usePasswordGenerator from './hooks/usePasswordGenerator';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import StrengthChecker from './components/StrengthChecker';

const App = () => {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);

  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true)

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMesssage, generatePassword } = usePasswordGenerator();

  return (
    <div className='bg-[#24232b] w-full h-screen flex 
    justify-center items-center text-white'>
      <div className='w-[80%] bg-gray-950 flex flex-col gap-5 p-8 rounded-md'>
        {password && (
          <div className='flex justify-between items-center'>
            <div className="text-2xl font-medium">{password}</div>
            <Button
              text={copied ? "Copied" : "Copy"}
              onClick={handleCopy}
              className="text-xl font-bold bg-gray-700 rounded-sm px-4 py-2"
            />
          </div>
        )}

        {/* Character Length */}
        <div className='flex flex-col gap-4'>
          <span className='flex justify-between text-2xl'>
            <label>Character Length</label>
            <label>{length}</label>
          </span>
          <input
            type='range'
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        {/* Checkboxes */}
        <div className="grid grid-cols-2 gap-4">
          {
            checkboxData.map((checkbox, index) => {
              return (
                <Checkbox
                  key={index}
                  title={checkbox.title}
                  onChange={() => handleCheckboxChange(index)}
                  state={checkbox.state}
                />
              )
            })
          }
        </div>
        {/* Strength */}
        <StrengthChecker password={password} />

        {/* Error Handling */}
        {errorMesssage && <div className="text-red-600 text-2xl font-bold">{errorMesssage}</div>}

        <Button
          text="Generate Password"
          onClick={() => generatePassword(checkboxData, length)}
          className="w-[500px] px-8 py-5 mx-auto bg-gray-500 rounded-md font-bold"
        />
      </div>
    </div>
  )
}

export default App