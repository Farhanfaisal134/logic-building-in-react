import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');

  const generateQRCode = () => {
    if (inputValue.trim() !== '') {
      setQrValue(inputValue);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">QR Code Generator</h1>

      <div className="flex flex-col gap-4 items-center">
        {/* Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text to generate QR code"
          className="px-4 py-2 border rounded-md w-80 text-lg"
        />

        {/* Generate Button */}
        <button
          onClick={generateQRCode}
          className="px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-500"
        >
          Generate QR Code
        </button>

        {/* Display QR Code */}
        {qrValue && (
          <div className="mt-8">
            <QRCodeCanvas value={qrValue} size={256} bgColor={"#ffffff"} fgColor={"#000000"} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App