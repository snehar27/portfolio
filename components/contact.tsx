"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      // viewport={{
      //   once: true,
      // }}
    >
      {/* allows width to be either fixed or the entire screen, depending on width of screen (responsive!) */}
      <SectionHeading>Contact Me!</SectionHeading>
      <p className="text-gray-700 -mt-3">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sr934@cornell.edu">
          sr934@cornell.edu
        </a>{" "}
        or via{" "}
        <a
          className="underline"
          href="https://www.linkedin.com/in/sneha-rajaraman-4884b5253"
          target="_blank"
        >
          LinkedIn
        </a>
        !
      </p>

      {/* <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your Message"
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit <FaPaperPlane className="text-xs opacity-70 transition-all" />{" "}
        </button>
      </form> */}
    </motion.section>
  );
}
