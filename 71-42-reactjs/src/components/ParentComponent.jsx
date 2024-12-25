const ParentComponent = () => {
  const parentData = "This is data from Parent"; // Parent data

  return (
    <div className="p-4">
      <ChildComponent data={parentData} /> {/* Data pass kiya */}
    </div>
  );
}

const ChildComponent = ({ data }) => { // Props ko destructure kiya
  return (
    <div className="p-4">
      <h2 className="text-lg">{data}</h2> {/* Parent se aaya data display kiya */}
    </div>
  );
}

export default ParentComponent;
