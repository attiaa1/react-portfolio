import React, { useRef, useEffect, useState } from "react";
import Chunk from "./components/Chunk";
import "./App.css";

const Section = ({ children }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(ref.current); // Stop observing once it's in view
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`App ${isInView ? "in-view" : ""}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { animate: isInView })
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="wrapper">
      <Section>
        <Chunk direction="north">North</Chunk>
        <Chunk direction="south">South</Chunk>
        <Chunk direction="east">East</Chunk>
        <Chunk direction="west">West</Chunk>
      </Section>
      <Section>
        <Chunk direction="north">North</Chunk>
        <Chunk direction="south">South</Chunk>
        <Chunk direction="east">East</Chunk>
        <Chunk direction="west">West</Chunk>
      </Section>
      <Section>
        <Chunk direction="north">North</Chunk>
        <Chunk direction="south">South</Chunk>
        <Chunk direction="east">East</Chunk>
        <Chunk direction="west">West</Chunk>
      </Section>
    </div>
  );
};

export default App;
