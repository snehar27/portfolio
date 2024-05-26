"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { animate, motion } from "framer-motion";
import { initialize } from "next/dist/server/lib/render-server";

const fadeInAnimationInvariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {/* flex will place everything in the list horizontally next to each other */}
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationInvariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3" //border-black/[0.1] indicates that the border is black with an opacity of 0.1 (10%)
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
