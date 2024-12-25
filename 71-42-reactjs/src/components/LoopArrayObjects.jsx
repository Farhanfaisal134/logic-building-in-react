const LoopArrayObjects = () => {
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
  ];

  return (
    <div className="p-4">
      <ul>
        {items.map((item) => (
          <li key={item.id} className="mb-2 text-lg">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoopArrayObjects;
