import { useEffect } from "react";

export function useTitle(text) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = text;
    }
  }, [text]);
}
