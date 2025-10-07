import React, { useState } from "react";
import "./style.css";

function Main() {
  const [foundItems, setFoundItems] = useState([]);

  const items = [
    { id: "frame", src: "frame.png", alt: "Frame" },
    { id: "lens", src: "lens.png", alt: "Lens" },
    { id: "polaroid", src: "polaroid.png", alt: "Polaroid" },
  ];

  const handleClick = (alt) => {
    if (!foundItems.includes(alt)) {
      setFoundItems([...foundItems, alt]);
    }
  };

  return (
    <div className="darkroom-container">
      <div className="scene-title">
        <h1>The Darkroom</h1>
        <h3>
          Find the frame, the eye that never blinks, and the memory that couldn’t
          dry.
        </h3>
      </div>

      <div className="scene">
        {items.map((item) => (
          <img
            key={item.id}
            src={item.src}
            alt={item.alt}
            id={item.id}
            className={`item ${foundItems.includes(item.alt) ? "found" : ""}`}
            onClick={() => handleClick(item.alt)}
          />
        ))}
      </div>

      <div className="found-items">
        <h3>Found:</h3>
        <ul id="found-list">
          {foundItems.map((alt) => (
            <li key={alt}>{alt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
