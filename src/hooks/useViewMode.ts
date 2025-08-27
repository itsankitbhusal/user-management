import { useState, useEffect } from "react";
import { isServer } from "../utils/misc";

export const useViewMode = () => {
  const [viewMode, setViewModeState] = useState<"card" | "table">("card");

  useEffect(() => {
    if (!isServer) {
      const storedMode = (localStorage.getItem("viewMode") as "card" | "table") || "card";
      setViewModeState(storedMode);
    }
  }, []);

  const setMode = (mode: "card" | "table") => {
    if (!isServer) localStorage.setItem("viewMode", mode);
    setViewModeState(mode);
  };

  return { viewMode, setMode };
};
