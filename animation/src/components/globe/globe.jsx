import React, { useState, useEffect } from "react";
import "./globe.css";

export default function Globe(props) {
  const [leftPosition, setLeftPosition] = useState("50%");

  const handleScroll = () => {
    const scrollX = window.scrollX; // Get the horizontal scroll position
    console.log(scrollX);
    setLeftPosition(`${-100 + scrollX}px`); // Adjust the position based on scrollX
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.StrictMode>
      <div className="fullSize">
        <h1>{props.head}</h1>
        <div className="globeShape" style={{ left: leftPosition }}>
          {/* Content inside the globe */}
        </div>
      </div>
    </React.StrictMode>
  );
}
