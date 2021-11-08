import React, { useState } from "react";
import randomColor from "randomcolor";

export default function Playground() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
    </div>
  );
}

// Podríamos usar count directamente, pero al manejarse el estado de forma asíncrona podríamos llegar a ver valores que no fueran correctos.
