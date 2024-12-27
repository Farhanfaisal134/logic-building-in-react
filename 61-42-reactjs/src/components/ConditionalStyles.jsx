const ConditionalStyles = () => {
  const isActive = true;

  return (
    <div
      style={{
        backgroundColor: isActive ? "green" : "red", // Conditional styling
        color: "white",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {isActive ? "Active" : "Inactive"}
    </div>
  );
};

export default ConditionalStyles;
