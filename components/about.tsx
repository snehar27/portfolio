"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    // synchronize state with an external system (active-section-context)
    if (inView && Date.now() - timeOfLastClick > 1000) {
      // if inView and the diff between now and the time of the last click is more than 1 second
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]); // run only if one of these variables change

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* use leading to increase space between lines */}
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">Paragraph 1</p>
      <p>Paragraph 2</p>
    </motion.section>
  );
}
