import React from "react";
import TabButton from "../TabButton/TabButton.jsx";
import Section from "../Section/Section.jsx";
import Tab from "../Tab/Tab.jsx";
import { EXAMPLES } from "../../data.js";
import { useState } from "react";
import "./Example.css";

/**
 * Generates a function comment for the given function body.
 *
 * @param {type} selectedButton - The selected button.
 * @return {type} The updated button content.
 */
const Example = () => {
  const [clickedButtonContent, setButtonContent] = useState("");
  function handleSelect(selectedButton) {
    // SelectedButton -> Components, JSX, Props, States() =>
    setButtonContent(selectedButton);
    console.log(selectedButton);
  }
  let tabcontent = <p>Please select a toppic</p>;

  if (clickedButtonContent) {
    tabcontent = (
      <div id="tab-content" className="tab-content">
        <h3>{EXAMPLES[clickedButtonContent].title}</h3>
        <p>{EXAMPLES[clickedButtonContent].description}</p>
      </div>
    );
  }

  return (
    <>
      <Section id="" title="Exemple">
        <Tab
          BtnContainer="menu"
          buttons={
            <>
              <TabButton
                isSelected={clickedButtonContent === "components"}
                onClick={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={clickedButtonContent === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={clickedButtonContent === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={clickedButtonContent === "state"}
                onClick={() => handleSelect("state")}
              >
                States
              </TabButton>
            </>
          }
        >
          {tabcontent}
        </Tab>
      </Section>
    </>
  );
};

export default Example;
