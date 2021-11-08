import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import randomColor from "randomcolor";

export default function Playground() {
  const [count, setCount] = useState(30);
  const [color, setColor] = useState(randomColor());

  const cb = useCallback((num) => console.log(num), [count]);

  const inputRef = useRef();

  useEffect(() => {
    //setColor(randomColor());
    inputRef.current.focus();
  }, [count]);

  // USE EFFECT
  // [] -> el render se produce una sola vez
  // [count] -> se renderiza de nuevo cada vez que cambia count
  // sin dependencias -> bucle infinito

  useCallback(() => console.log("useCallback")); // retornamos la función
  useMemo(() => console.log("useMemo")); // retorna el RESULTADO de la función
  // useMemo(() => () => console.log("useMemo"))  ambos hooks, useCallBack y useMemo serían ahora equivalentes

  return (
    <div style={{ borderTop: `10px solid ${color}` }}>
      {count}
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
      <button onClick={() => setColor(randomColor())}>Change Color</button>
      <hr />
      <input
        ref={inputRef}
        type="range"
        onChange={(event) => setCount(event.target.value)}
        value={count}
      />
      <Calculate cb={cb} num={count} />
    </div>
  );
}

// Podríamos usar count directamente, pero al manejarse el estado de forma asíncrona podríamos llegar a ver valores que no fueran correctos.

// Performande inline functions
// https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578

const Calculate = React.memo(({ cb, num }) => {
  cb(num);
  const renderCount = useRef(1); // useRef mantenderá el valor entre renderizados
  return <div>{renderCount.current++}</div>;
});
