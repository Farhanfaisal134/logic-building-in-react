import React from "react";
import { useState } from "react";

const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

const App = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyState = [...multiple];
    const findIndexOfCurretnId = copyState.indexOf(getCurrentId);
    if (findIndexOfCurretnId === -1) {
      copyState.push(getCurrentId);
    } else {
      copyState.splice(findIndexOfCurretnId, 1);
    }

    setMultiple(copyState);
  }

  return (
    <div className="w-full min-h-screen p-4 flex flex-col justify-center items-center bg-gray-700 text-white">
      <h1
        className="mb-3 bg-gray-900 p-3 font-bold cursor-pointer"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        {enableMultiSelection
          ? "Enable Multi Selection On"
          : "Enable Multi Selection Off"}
      </h1>
      <div className="flex flex-col gap-5 w-2/3">
        {data &&
          data.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-gray-900 px-7 py-4 rounded-md cursor-pointer flex flex-col gap-3"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <div className="flex justify-between text-2xl">
                  <h1>{item.question}</h1>
                  <span className="text-3xl">+</span>
                </div>
                <div>
                  {enableMultiSelection ? multiple.indexOf(item.id) !== -1 && (
                    <div className="font-bold text-gray-400">{item.answer}</div>
                  ) : (
                    selected === item.id && (
                      <div className="font-bold text-gray-400">{item.answer}</div>
                    )
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
