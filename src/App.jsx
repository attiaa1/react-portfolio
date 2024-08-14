import React, { useRef, useEffect, useState } from "react";
import Chunk from "./components/Chunk";
import Home from "./components/Home";
import Home_BL from "./components/Home_BL";
import Home_TR from "./components/Home_TR";
import Home_BR from "./components/Home_BR";
import Project_TL from "./components/Project_TL"
import Project_BL from "./components/Project_BL"
import Project_TR from "./components/Project_TR";
import Project_BR from "./components/Project_BR";
import "./App.css";

const Section = ({ children, className }) => {
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
    <div ref={ref} className={`App ${className} ${isInView ? "in-view" : ""}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { animate: isInView })
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="wrapper">
      {/* <a href="#section1">Go to Section 1</a> */}
      <Section id="firstPage" className="page1">
        <Chunk direction="north">
        <Home></Home>
        </Chunk>
        <Chunk direction="south">
          <Home_BR></Home_BR>
          </Chunk>
        <Chunk direction="east">
          <Home_TR></Home_TR>
        </Chunk>
        <Chunk direction="west">
        <Home_BL></Home_BL>
        </Chunk>
      </Section>

      <Section id="secondPage" className="page2">
        <Chunk direction="north">
          <Project_BL></Project_BL>
        </Chunk>
        <Chunk direction="south">
          <Project_BR></Project_BR>
        </Chunk>
        <Chunk direction="east">
          <Project_TR></Project_TR>
          </Chunk>
        <Chunk direction="west">
          <Project_TL></Project_TL>
        </Chunk>
      </Section>

      <Section id="thirdPage" className="page3">
        <Chunk direction="north">North</Chunk>
        <Chunk direction="south">South</Chunk>
        <Chunk direction="east">East</Chunk>
        <Chunk direction="west">West</Chunk>
      </Section>
      <Section id="fourthPage" className="page4">
        <Chunk direction="north">North</Chunk>
        <Chunk direction="south">South</Chunk>
        <Chunk direction="east">East</Chunk>
        <Chunk direction="west">West</Chunk>
      </Section>
    </div>
  );
};

export default App;
