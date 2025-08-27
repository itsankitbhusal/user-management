import { useState } from "react";
import { isServer } from "../utils/misc";

export const useViewMode = () => {
    const getMode = () => {
        if (isServer) return "card";
        return localStorage.getItem("viewMode") || "card";
    };
    const [viewMode, setViewMode] = useState(getMode() ?? "card");
    const setMode = (mode: "card" | "table") => {
        if (isServer) return;
        localStorage.setItem("viewMode", mode);
        setViewMode(mode)
    };
    return { viewMode, setMode };
};