import React, { useRef, useState } from 'react';

const App = () => {
  const [filePreview, setFilePreview] = useState(null);
  const uploadRef = useRef();
  const progressRef = useRef();
  const statusRef = useRef();
  const loadRef = useRef();

  const handleUploadFile = () => {
    const file = uploadRef.current.files[0];
    setFilePreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("image", file);

    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", handleProgress, false);
    xhr.addEventListener("load", handleSuccess, false);
    xhr.addEventListener("error", handleError, false);
    xhr.addEventListener("abort", handleAbort, false);

    xhr.open("POST", "https://v2.convertapi.com/upload");
    xhr.send(formData);
  };

  const handleProgress = (event) => {
    const percentage = Math.round((event.loaded / event.total) * 100);
    loadRef.current.textContent = `Uploaded ${event.loaded} bytes of ${event.total}`;
    progressRef.current.value = percentage;
    statusRef.current.textContent = `${percentage}% uploaded...`;
  };

  const handleSuccess = () => {
    statusRef.current.textContent = "Upload successful!";
    progressRef.current.value = 0;
  };

  const handleError = () => {
    statusRef.current.textContent = "Upload failed! Please try again.";
  };

  const handleAbort = () => {
    statusRef.current.textContent = "Upload aborted! Please try again.";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold text-center mb-8">File Upload with Progress Bar</h1>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full flex flex-col items-center">
        <input
          onChange={handleUploadFile}
          type="file"
          name="file"
          ref={uploadRef}
          className="mb-4 p-2 border border-gray-300 rounded cursor-pointer w-full"
        />
        <label className="w-full flex items-center gap-3 mb-4 text-gray-700">
          <span className="font-medium">File Progress:</span>
          <progress ref={progressRef} value="0" max="100" className="flex-grow h-4"></progress>
        </label>
        <p ref={statusRef} className="text-gray-600 mb-2 text-center"></p>
        <p ref={loadRef} className="text-sm text-gray-500 text-center mb-4"></p>
        {filePreview && (
          <img
            src={filePreview}
            alt="Uploaded Preview"
            className="w-64 h-64 object-cover rounded-lg shadow-md mt-4"
          />
        )}
      </div>
    </div>
  );
};

export default App;
