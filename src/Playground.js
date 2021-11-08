import React, { useState, useEffect, useRef } from "react";
import randomColor from "randomcolor";

export default function Playground() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(null);

  const inputRef = useRef();

  useEffect(() => {
    setColor(randomColor());
    inputRef.current.focus();
  }, [count]);

  // USE EFFECT
  // [] -> el render se produce una sola vez
  // [count] -> se renderiza de nuevo cada vez que cambia count
  // sin dependencias -> bucle infinito

  return (
    <div style={{ borderTop: `10px solid ${color}` }}>
      {count}
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
      <hr />
      <input
        ref={inputRef}
        type="range"
        onChange={(event) => setCount(event.target.value)}
        value={count}
      />
    </div>
  );
}

// Podríamos usar count directamente, pero al manejarse el estado de forma asíncrona podríamos llegar a ver valores que no fueran correctos.

// Performande inline functions
// https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578
