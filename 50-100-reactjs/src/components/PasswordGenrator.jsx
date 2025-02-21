import React, { useState } from 'react'
import { usePasswordStore } from '../store/store';

const PasswordGenrator = () => {
  const {
    length,
    includeNumbers,
    includeSymbols,
    includeUppercase,
    includeLowercase,
    generatedPassword,
    setLength,
    toggleNumbers,
    toggleSymbols,
    toggleUppercase,
    toggleLowercase,
    generatePassword,
  } = usePasswordStore();

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Password Generator
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="space-y-2 mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={toggleNumbers}
              className="mr-2"
            />
            Include Numbers
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={toggleSymbols}
              className="mr-2"
            />
            Include Symbols
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={toggleUppercase}
              className="mr-2"
            />
            Include Uppercase Letters
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={toggleLowercase}
              className="mr-2"
            />
            Include Lowercase Letters
          </label>
        </div>

        <button
          onClick={generatePassword}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Generate Password
        </button>

        {
          generatedPassword && (
            <div className="mt-4 flex items-center justify-between bg-gray-100 p-3 rounded-lg">
              <span className="text-gray-800 break-all">{generatedPassword}</span>
              <button
                onClick={handleCopy}
                className="text-indigo-600 font-semibold hover:text-indigo-800"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default PasswordGenrator