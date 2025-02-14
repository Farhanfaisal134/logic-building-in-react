import { useEffect, useRef, useState } from "react";

const Otp = () => {
  const CODE = "3155";
  const inputCount = CODE.length;
  const refs = Array.from({ length: inputCount }, () => useRef(null));
  const [inputs, setInputs] = useState(Array(inputCount).fill(""));

  useEffect(() => {
    refs[0].current?.focus();
  }, []);

  const handleSubmit = () => {
    if (inputs.includes("")) return alert("Please fill all fields!");
    const userInput = inputs.join("");
    alert(userInput === CODE ? "Code is Valid" : "Code is not Valid");
  };

  const handleInputChange = (e, index) => {
    const val = e.target.value;
    if (!Number(val)) return;
    const newInputs = [...inputs];
    newInputs[index] = val;
    setInputs(newInputs);
    if (index < inputCount - 1) refs[index + 1].current?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newInputs = [...inputs];
      newInputs[index] = "";
      setInputs(newInputs);
      if (index > 0) refs[index - 1].current?.focus();
    };
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text").trim();
    if (!Number(data) || data.length !== inputs.length) return
    setInputs(data.split(""));
    refs[inputCount - 1].current?.focus();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Two Factor Code Input</h1>
      <div className="flex gap-2">
        {inputs.map((value, i) => (
          <input
            key={i}
            ref={refs[i]}
            value={value}
            type="text"
            maxLength="1"
            onPaste={handlePaste}
            onChange={(e) => handleInputChange(e, i)}
            onKeyDown={(e) => handleOnKeyDown(e, i)}
            className="w-12 h-12 border-2 rounded-md text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300"
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-2 bg-indigo-500 text-white text-lg font-semibold rounded-md 
        hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        Submit
      </button>
    </div>
  );
}

export default Otp