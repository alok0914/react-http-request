// MouseTracker.js (The "provider" component)
import React, { useState } from 'react';

function MouseTracker(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {props.render(position)} {/* Call the render prop with the position */}
    </div>
  );
}

export default MouseTracker;