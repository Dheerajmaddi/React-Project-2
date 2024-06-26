import Section from "./Section";
import { CORE_CONCEPTS } from "../data";
import Concept from "./Concept";

export default function CoreConcepts() {
  return (
    <>
      <Section
        id="core-concepts"
        title="Core Concepts"
        content={
          <ul>
            {CORE_CONCEPTS.map((conceptItem, index) => (
              <Concept key={index} {...conceptItem} />
            ))}
          </ul>
        }
      ></Section>
    </>
  );
}
