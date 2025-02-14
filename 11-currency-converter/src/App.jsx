import React, { useEffect, useState } from 'react'

const App = () => {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  // Tumhari code ka masla yeh hai ke tum result?.rates.toCurrency likh rahe ho,
  // jabke toCurrency ek variable hai, na ke ek fixed key.
  // let toCurrency = "PKR"

  async function fetchExchangeRate() {
    const apiResponse = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`,
      {
        method: "GET",
      },
    );
    const result = await apiResponse.json();
    // console.log(result);

    const calculatedRate = result?.rates[toCurrency];
    setExchangeRate(calculatedRate);
    setConvertedAmount((amount * calculatedRate).toFixed(2))
  };

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency, amount])

  return (
    <div className='mt-10'>
      <div className='max-w-2xl mx-auto bg-slate-200 px-6 py-6 rounded-lg shadow-lg flex flex-col items-center gap-6'>
        <h1 className='text-2xl font-bold text-gray-800'>Currency Converter</h1>

        <div className='flex w-full border border-gray-300 rounded-lg overflow-hidden'>
          <input
            value={amount}
            className='bg-transparent p-3 text-xl w-full outline-none bg-white'
            placeholder='Enter amount'
            onChange={(e) => setAmount(e.target.value)}
          />

          <select className='p-3 text-xl bg-gray-100 outline-none border-l
           border-gray-300 cursor-pointer hover:bg-gray-200 focus:bg-white'
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="PKR">PKR</option>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        <p className='text-3xl font-bold'>To</p>
        <div className='flex w-full border border-gray-300 rounded-lg overflow-hidden'>
          <input
            className='bg-transparent p-3 text-xl w-full outline-none bg-white'
            placeholder='Converted Amount'
            type='text'
            readOnly
            value={convertedAmount}
          />

          <select className='p-3 text-xl bg-gray-100 
          outline-none border-l border-gray-300 cursor-pointer 
          hover:bg-gray-200 focus:bg-white'
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value={"PKR"}>PKR</option>
            <option value={"INR"}>INR</option>
            <option value={"USD"}>USD</option>
            <option value={"EUR"}>EUR</option>
          </select>
        </div>

        <p>
          Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}
        </p>
      </div>
    </div>
  )
};

export default App;