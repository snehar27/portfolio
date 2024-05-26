"use client";

import React, { useContext } from "react";
import { useState, createContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>; // can get this type by hovering over setActiveSection during initialization
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home"); // use when trying to keep track of something, keeps track of state
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // use this to temporarily disable the toggles between clicks so that it doesn't stop at each section as it moves to another one that was clicked on the header
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider> // used to wrap children with something
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext); // gets the value of the context (activeSection and setActiveSection)

  if (context == null) {
    throw new Error("Error!"); // throws and error if the useContext is null
  }
  return context;
}
