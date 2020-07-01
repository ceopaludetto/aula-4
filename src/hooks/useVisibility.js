import React, { useState } from "react";

export function useVisibility(initialState = false) {
  const [visibility, setVisibility] = useState(initialState);

  function handleClick() {
    setVisibility(!visibility);
  }

  function render() {
    return (
      <button onClick={handleClick}>
        {visibility ? "esconder olhinho" : "mostrar olhinho"}
      </button>
    );
  }

  function getProps() {
    return { type: visibility ? "text" : "password" };
  }

  return { visibility, render, getProps };
}

export function useMultipleVisibility(names, initialState = false) {
  const [visibility, setVisibility] = useState(() => {
    let state = {};

    names.forEach((n) => {
      state[n] = initialState;
    });

    return state;
  });

  function handleClick(name) {
    setVisibility({ ...visibility, [name]: !visibility[name] });
  }

  function render(name) {
    return (
      <button onClick={() => handleClick(name)}>
        {visibility[name] ? "esconder olhinho" : "mostrar olhinho"}
      </button>
    );
  }

  function getProps(name) {
    return { type: visibility[name] ? "text" : "password" };
  }

  return { visibility, render, getProps };
}
