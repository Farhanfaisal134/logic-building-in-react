import React, { useRef, useState } from "react";

const CharacterCounter = () => {
  const textareaRef = useRef(null);
  const maxChars = 100;
  const [remaining, setRemaining] = useState(maxChars);

  const handleInput = () => {
    const currentLength = textareaRef.current.value.length;
    setRemaining(maxChars - currentLength);
  };

  return (
    <div className="p-4">
      <textarea
        ref={textareaRef}
        maxLength={maxChars}
        onInput={handleInput}
        className="border p-2 w-full outline-none"
        placeholder="Type here..."
      />
      <p className="text-sm mt-2">Characters Remaining: {remaining}</p>
    </div>
  );
};

export default CharacterCounter;
