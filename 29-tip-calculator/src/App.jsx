import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState(10);
  const [splitCount, setSplitCount] = useState(1);
  const [tipAmount, setTipAmount] = useState('');
  const [errorMsg, setErrorMsg] = useState("");

  function handleCalculteTip() {
    if (
      !billAmount ||
      billAmount <= 0 ||
      !tipPercentage ||
      tipPercentage <= 0
    ) {
      setTipAmount(null);
      setErrorMsg("Please enter valid values for Bill amount & Tip Percentage");
      return;
    };

    const bill = parseFloat(billAmount);
    const tip = (bill * tipPercentage) / 100;
    const totalAmount = bill + tip;
    const tipAmountPerPerson = tip / splitCount;
    const totalAmountPerPerson = totalAmount / splitCount;

    setTipAmount({
      totalAmount: totalAmount.toFixed(2),
      tipPerPerson: tipAmountPerPerson.toFixed(2),
      totalPerPerson: totalAmountPerPerson.toFixed(2),
    });
    setErrorMsg('')
  };

  return (
    <div className="mt-10 text-center w-full">
      <h1 className="text-2xl font-bold mb-2">Tip Calculator</h1>
      <div className="max-w-3xl mx-auto bg-slate-300 p-4 flex flex-col gap-4">
        <div className="grid grid-cols-2 items-center">
          <label className="flex items-start text-2xl font-semibold">
            Bill Amount:
          </label>
          <Input
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 items-center font-semibold">
          <label className="flex items-start text-2xl">Tip Percentage:</label>
          <Input
            type="number"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 items-center font-semibold">
          <label className="flex items-start text-2xl">Number Of People:</label>
          <Input
            type="number"
            value={splitCount}
            onChange={(event) => setSplitCount(event.target.value)}
          />
        </div>
        <div className="w-fit mx-auto mt-4">
          <Button text="Calcuate Tip" onClick={handleCalculteTip} />
        </div>
        {errorMsg ? (
          <p className="text-red-500 font-bold text-xl">{errorMsg}</p>
        ) : null}
        {tipAmount ? (
          <div className="flex justify-center flex-col gap-3 text-2xl font-bold">
            <p>Total Amount : {tipAmount.totalAmount}</p>
            <p>Tip Per Person : {tipAmount.tipPerPerson}</p>
            <p>Total Amount Per Person: {tipAmount.totalPerPerson}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
