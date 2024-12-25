const LoopArray = () => {
  const items = ["Apple", "Banana", "Orange"]; // Simple array

  return (
    <div className="p-4">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-2 text-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoopArray;
