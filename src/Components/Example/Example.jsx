import React from "react";
import TabButton from "../TabButton/TabButton.jsx";
import { EXAMPLES } from "../../data.js";
import { useState } from "react";

const Example = () => {
  const [clickedButtonContent, setButtonContent] = useState("");
  function handleSelect(selectedButton) {
    // SelectedButton -> Components, JSX, Props, States() =>
    setButtonContent(selectedButton);
    console.log(selectedButton);
  }
  return (
    <>
      <section>
        <h2>Example</h2>
        <menu>
          <TabButton
            isSelected={clickedButtonContent === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={clickedButtonContent === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={clickedButtonContent === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={clickedButtonContent === "state"}
            onSelect={() => handleSelect("state")}
          >
            States
          </TabButton>
        </menu>
        {!clickedButtonContent && <p>Please select a toppic</p>}
        {clickedButtonContent && (
          <div>
            <h3>{EXAMPLES[clickedButtonContent].title}</h3>
            <p>{EXAMPLES[clickedButtonContent].description}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Example;
