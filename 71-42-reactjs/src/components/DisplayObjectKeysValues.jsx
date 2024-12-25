const DisplayObjectKeysValues = () => {
  const data = {
    name: "Farhan",
    age: 25,
    profession: "Developer",
  };

  return (
    <div className="p-4">
      <ul>
        {Object.entries(data).map(([key, value], index) => (
          <li key={index} className="mb-2 text-lg">
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayObjectKeysValues;
