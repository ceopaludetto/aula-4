import React, { useState } from "react";

import { useTitle } from "./hooks/useTitle";
import { useCounter } from "./hooks/useCounter";
import { useStepper } from "./hooks/useStepper";
import { useMultipleVisibility } from "./hooks/useVisibility";

export function App() {
  const [text, setText] = useState("ANY E O CARAIO");
  useTitle(text);

  const { count, inc, dec, set, type } = useCounter();

  const { current, next, prev, isFirst, isLast } = useStepper(3);

  const { getProps, render } = useMultipleVisibility([
    "actualpassword",
    "password",
    "repeatpassword",
  ]);

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>
        Contagem: {count} do Tipo {type}
      </p>
      <button onClick={() => inc()}>+</button>{" "}
      <button onClick={() => dec()}>-</button>{" "}
      <button onClick={() => set(4)}>set</button>
      <hr />
      {current === 0 && <div>Step 1</div>}
      {current === 1 && <div>Step 2</div>}
      {current === 2 && <div>Step 3</div>}
      <button disabled={isFirst} onClick={prev}>
        Prev
      </button>{" "}
      <button disabled={isLast} onClick={next}>
        Next
      </button>
      <hr />
      <input placeholder="Atual" {...getProps("actualpassword")}></input>{" "}
      {render("actualpassword")}
      <br />
      <input placeholder="Nova" {...getProps("password")}></input>{" "}
      {render("password")}
      <br />
      <input
        placeholder="Repetir Nova"
        {...getProps("repeatpassword")}
      ></input>{" "}
      {render("repeatpassword")}
    </>
  );
}
