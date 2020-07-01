import { useCounter } from "./useCounter";

export function useStepper(pages) {
  const { count, inc, dec, set } = useCounter();

  function next() {
    if (count + 1 < pages) {
      inc();
    }
  }

  function prev() {
    if (count > 0) {
      dec();
    }
  }

  function changePage(page) {
    if (page < pages && page > 0) {
      set(page);
    }
  }

  function reset() {
    set(0);
  }

  const isLast = count + 1 === pages;
  const isFirst = count === 0;

  return { current: count, next, prev, changePage, reset, isLast, isFirst };
}
