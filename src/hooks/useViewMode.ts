import { useState } from "react";

export const useViewMode = () => {
    const getMode = () => {
        return localStorage.getItem("viewMode") || "card";
    };
    const [viewMode, setViewMode] = useState(getMode() ?? "card");
    const setMode = (mode: "card" | "table") => {
        localStorage.setItem("viewMode", mode);
        setViewMode(mode)
    };
    return { viewMode, setMode };
};