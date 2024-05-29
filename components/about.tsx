"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.95);

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
      <p className="mb-3">
        <b>
          Hi! My name is Sneha Rajaraman and I am a junior studying Computer
          Science at Cornell University's College of Engineering.
        </b>{" "}
        I am originally from Northern Virginia, where my Computer Science
        journey really began. Having been driven towards social service, I was
        exposed to the various ways technology can be used to make an impact,
        and as my high school self started dabbling in various persuits in hopes
        of finding my passion, I came across the wondrous world of coding! I
        finally chose to pursue Computer Science as a career, not only because
        it had become something that I thoroughly enjoyed, but also because of
        its far reaching impact. That being said, I am fortunate to have been
        given opportunities to expand my knowledge on the subject, whether it is
        through my campus involvements, internships, or fun projects!
      </p>
      <p>
        On campus, I serve as the{" "}
        <b>Technical Director of Women in Computing at Cornell (WICC)</b>, where
        my team and I design and develop the WICC website. Additionally, I am a{" "}
        <b>Developer on the project team Hack4Impact</b>, where we partner with
        non-profit organizations worldwide to provide technological solutions to
        societal issues. Through these roles, my research, and other projects, I
        have gained valuable experience working with diverse groups of people as
        well as a wide range of technological tools. I plan to use these skills
        to continue learning while striving to always make an impact!
      </p>
      <p>
        While I am not typing away at my computer, I enjoy listening, singing,
        and dancing to music, cooking, hiking, and practicing calligraphy! As an
        eggless baker and vegetarian, I love experimenting with new ways to make
        delicious eggless desserts and meatless meals! I am also a fan of a good
        movie or a show to binge, so if you have any recommendations, please
        reach out 😄
      </p>
    </motion.section>
  );
}
