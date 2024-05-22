"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
              // delay: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🥳
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi! I'm Sneha.</span> I'm a{" "}
        <span className="font-bold">student at Cornell University</span>{" "}
        studying <span className="font-bold">Computer Science</span> in
        Cornell's College of Engineering.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-md font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 rounded-full flex items-center gap-2 outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me! <BsArrowRight className="opacity-70" />
        </Link>
        <a
          className="bg-white px-7 py-3 rounded-full flex items-center gap-2 outline-none hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
          download
        >
          Download Resume <HiDownload />
        </a>
        <a
          className="bg-white p-4 text-gray-700 rounded-full flex items-center gap-2 hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/sneha-rajaraman-4884b5253"
          target="_blank" // opens in a new tab
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 rounded-full flex items-center gap-2 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/snehar27"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}