const ConditionalRendering = () => {
  const isLoggedIn = true;

  return (
    <div className="p-4">
      {isLoggedIn ? (
        <h2 className="text-green-500">Welcome, User!</h2> // Condition true
      ) : (
        <h2 className="text-red-500">Please log in.</h2> // Condition false
      )}
    </div>
  );
};

export default ConditionalRendering;
