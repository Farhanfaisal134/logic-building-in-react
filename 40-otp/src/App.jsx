import { useEffect } from "react";
import { useRef, useState } from "react";

function App() {
  const emptyArr = ["", "", "", ""];
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [inputs, setInputs] = useState(emptyArr);
  const [missing, setMissing] = useState(emptyArr);
  const CODE = "3155";

  const handleSubmit = () => {
    const missed = inputs.map((item, i) => {
      if (item === '')
        return i;
    }).filter((item) => (item || item === 0));
    console.log('missed ', missed);
    setMissing(missed);
    if (missed.length) return;

    const userInput = inputs.join("");
    const isMatch = userInput === CODE;
    const msg = isMatch ? "Code is Valid" : "Code is not Valid";
    alert(msg);
  };

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const handleInputChange = (e, index) => {
    const val = e.target.value;
    if (!Number(val)) return

    if (index < inputs.length - 1) {
      refs[index + 1].current.focus()
    };
    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs)
  };

  const handleOnKeyDown = (e, index) => {
    if (e.keyCode === 8) {
      const copyInputs = [...inputs]
      copyInputs[index] = '';
      setInputs(copyInputs);

      if (index > 0) {
        refs[index - 1].current.focus();
      };
    };
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    if (!Number(data) || data.length !== inputs.length) return
    const pastCode = data.split("")
    setInputs(pastCode);
    refs[inputs.length - 1].current.focus();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Two Factor Code Input</h1>
      <div className="flex gap-2">
        {emptyArr.map((item, i) => {
          return (
            <input
              value={inputs[i]}
              key={i}
              ref={refs[i]}
              type="text"
              maxLength="1"
              onPaste={handlePaste}
              onChange={(e) => handleInputChange(e, i)}
              onKeyDown={(e) => handleOnKeyDown(e, i)}
              className={`w-12 h-12 border-2 rounded-md text-center text-lg font-medium 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 
                ${missing.includes(i) ? "border-red-500" : "border-gray-300"
                }`}
            />
          );
        })}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-2 bg-indigo-500 text-white text-lg font-semibold
         rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </div>
  );
}

export default App;
