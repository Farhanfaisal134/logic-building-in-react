const ReRenderOnChange = () => {
  const [value, setValue] = React.useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 mb-4"
        placeholder="Type something"
      />
      <p className="text-lg">You typed: {value}</p>
    </div>
  );
};

export default ReRenderOnChange;
