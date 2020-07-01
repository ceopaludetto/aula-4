import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function inc() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  function set(value) {
    setCount(value);
  }

  // fira code, editor.fontLigatures: true
  const type = count % 2 !== 0 ? "impar" : "par";

  return { count, inc, dec, set, type };
}
