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

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  function handleMultiSelection(getCurrentId) {
    let copyState = [...multiple];
    const findIndexOfCurretnId = copyState.indexOf(getCurrentId);
    if (findIndexOfCurretnId === -1) {
      copyState.push(getCurrentId);
    } else {
      copyState.splice(findIndexOfCurretnId, 1);
    };
    setMultiple(copyState);
  };

  return (
    <div className='flex justify-center p-4 bg-gray-700 h-screen'>
      <div className='w-full max-w-3xl mx-auto'>
        <button className='text-white text-xl bg-blue-600 rounded-sm p-2'
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >Enable Multi Selection {enableMultiSelection ? "ON" : "OFF"}</button>
        <div className='w-full flex flex-col gap-3 text-white mt-4'>
          {
            data.map((item) => {
              return (
                <div key={item.id} onClick={() => enableMultiSelection
                  ? handleMultiSelection(item.id)
                  : handleSingleSelection(item.id)}
                  className='flex flex-col gap-2 bg-gray-900 p-2 rounded-md'>
                  <div className='flex justify-between'>
                    <h1>{item.question}</h1>
                    <button className='bg-blue-500 p-1 rounded-sm'>
                      {selected?.includes(item.id) || multiple.includes(item.id) ? "-" : "+"}
                    </button>
                  </div>
                  {
                    enableMultiSelection ? multiple.includes(item.id) && <p>{item.answer}</p>
                      : selected?.includes(item.id) && <p>{item.answer}</p>
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default Accordian;
