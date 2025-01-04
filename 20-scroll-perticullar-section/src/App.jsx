import React, { useRef } from "react";

const App = () => {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "900px",
        background: "red",
        padding: "1rem",
        color: "white",
        fontSize: "24px"
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "900px",
        background: "grey",
        padding: "1rem",
        color: "white",
        fontSize: "24px"
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "900px",
        background: "blue",
        padding: "1rem",
        color: "white",
        fontSize: "24px"
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "900px",
        background: "green",
        padding: "1rem",
        color: "white",
        fontSize: "24px"
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "900px",
        background: "orange",
        padding: "1rem",
        color: "white",
        fontSize: "24px"
      },
    },
  ];

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Scroll to a particular secti</h1>
      <button
        style={{
          padding: "1rem",
          backgroundColor: "red",
          borderRadius: "8px",
          margin: "1rem",
          color: "white",
          fontSize: "20px",
          cursor: "pointer"
        }}
        onClick={handleScrollToSection}
      >
        Click To Scroll
      </button>
      {data.map((dataItem, index) => (
        <div ref={index === 2 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
