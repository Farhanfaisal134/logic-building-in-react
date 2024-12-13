const Pill = ({ image, text, onClick }) => {
  return (
    <span
      className="flex justify-center items-center gap-2 bg-black text-white py-1 px-3 rounded-md cursor-pointer"
      onClick={onClick}
    >
      <span>{text} </span>
      <span className="text-red-600 text-xl">&times;</span>
    </span>
  );
};

export default Pill;
