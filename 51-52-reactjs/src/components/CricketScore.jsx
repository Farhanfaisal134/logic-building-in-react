import React, { useState } from "react";

const CricketScore = () => {
  const [scoreData, setScoreData] = useState([]);
  const [ballNumber, setBallNumber] = useState(1);
  const [runs, setRuns] = useState(0);

  const handleScoreUpdate = () => {
    if (runs < 0) {
      alert("Runs cannot be negative");
      return;
    };

    const newScoreData = [...scoreData, { ball: ballNumber, runs }];
    setScoreData(newScoreData);
    setBallNumber(ballNumber + 1);
    setRuns(0);
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">Cricket Score Tracker</h2>

      {/* Table */}
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2">Ball Number</th>
            <th className="border-b px-4 py-2">Number of Runs</th>
          </tr>
        </thead>
        <tbody>
          {scoreData.map((score, index) => (
            <tr key={index}>
              <td className="border-b px-4 py-2 text-center">{score.ball}</td>
              <td className="border-b px-4 py-2 text-center">{score.runs}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Input and Button */}
      <div className="mt-4 max-w-2xl mx-auto flex">
        <input
          type="number"
          value={runs}
          onChange={(e) => setRuns(Number(e.target.value))}
          className="border p-2 rounded mr-4 w-full outline-none"
          placeholder="Runs"
        />
        <button
          onClick={handleScoreUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Score
        </button>
      </div>
    </div>
  );
};

export default CricketScore;