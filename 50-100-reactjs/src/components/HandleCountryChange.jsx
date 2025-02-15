import React, { useState } from "react";

const Dropdowns = () => {
  const countries = {
    USA: ["California", "Texas", "Florida"],
    India: ["Punjab", "Gujarat", "Maharashtra"],
    Pakistan: ["Punjab", "Sindh", "KPK"],
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setStates(countries[country] || []);
  };

  return (
    <div className="p-4">
      <select
        onChange={handleCountryChange}
        className="border p-2 mb-4 block"
        defaultValue=""
      >
        <option value="" disabled>
          Select Country
        </option>
        {
          Object.keys(countries).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))
        }
      </select>

      <select className="border p-2 block" defaultValue="">
        <option value="" disabled>
          Select State
        </option>
        {
          states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))
        }
      </select>
    </div>
  );
};

export default Dropdowns;
