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
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home"); // use when trying to keep track of something, keeps track of state
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
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
