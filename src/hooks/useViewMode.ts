import { useState, useEffect } from "react";
import { isServer } from "../utils/misc";

export const viewModeOptions = {
  CARD: "card",
  TABLE: "table",
} as const;

export type ViewMode = (typeof viewModeOptions)[keyof typeof viewModeOptions];

const viewModeKeys = {
  VIEW_MODE: "view_mode",
};

export const useViewMode = () => {
  const [viewMode, setViewModeState] = useState<ViewMode>(viewModeOptions.CARD);

  useEffect(() => {
    if (!isServer) {
      const storedMode =
        localStorage.getItem(viewModeKeys.VIEW_MODE) || viewModeOptions.CARD;
      if (
        storedMode === viewModeOptions.CARD ||
        storedMode === viewModeOptions.TABLE
      ) {
        setViewModeState(storedMode);
      } else {
        setViewModeState(viewModeOptions.CARD);
      }
    }
  }, []);

  const setMode = (mode: ViewMode) => {
    if (!isServer) localStorage.setItem(viewModeKeys.VIEW_MODE, mode);
    setViewModeState(mode);
  };

  return { viewMode, setMode };
};
