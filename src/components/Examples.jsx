import Section from "./Section";
import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(undefined);

  let tabContent = "Please click a button";

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleClick(topic) {
    setSelectedTopic(topic);
  }

  return (
    <>
      <Section
        id="examples"
        title="Examples"
        content={
          <>
            <menu>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleClick("components")}
              >
                {EXAMPLES["components"].title}
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleClick("jsx")}
              >
                {EXAMPLES["jsx"].title}
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleClick("props")}
              >
                {EXAMPLES["props"].title}
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleClick("state")}
              >
                {EXAMPLES["state"].title}
              </TabButton>
            </menu>
            {tabContent}
          </>
        }
      ></Section>
    </>
  );
}
