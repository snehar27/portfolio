import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import McDiver from "@/public/McDiver.png";
import ImageClassification from "@/public/ImageClassification.png";
import LFBI from "@/public/LFBI.png";
import LFBI2 from "@/public/LFBI2.png";
import { GrTools } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";
import { VscCode } from "react-icons/vsc";
import { PiAirplaneTilt } from "react-icons/pi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
// as const is used to specify that we are not using any strings but the strings
// that we specify as values in this list

export const experiencesData = [
  {
    title: "Academy of Engineering and Technology (AET)",
    location: "Leesburg, VA",
    description:
      "Concurrently attended AET and was a student in the Engineering Pathway, participated in a research project and developed a device that detected pre-symptoms of Parkinson's Disease.",
    icon: React.createElement(GrTools), //because this is a ts file, we cannot have jsx elements (only can have such elements in a tsx file)
    date: "2018-2022",
  },
  {
    title: "Cornell University",
    location: "Ithaca, NY",
    description:
      "Student in Cornell's College of Engineering, Pursuing a B.S. in Computer Science with a minor in Artificial Intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2026",
  },
  {
    title: "Hack4Impact Cornell",
    location: "Ithaca, NY",
    description:
      "Partnered with various organizations worldwide to develop full-stack applications to address societal issues.",
    icon: React.createElement(BiWorld),
    date: "2022 - present",
  },
  {
    title: "Federal Aviation Administration Intern",
    location: "Washington, D.C.",
    description:
      "Utilized the Microsoft SharePoint framework to design and build a user-centric site to streamline team operations and improve efficiency of data storage and retrieval.",
    icon: React.createElement(PiAirplaneTilt),
    date: "2023",
  },
  {
    title: "Women in Computing @ Cornell (WICC) - Technical Committee Director",
    location: "Ithaca, NY",
    description:
      "Worked with team to design and develop website for WICC, address any issues and organize ways to make work sessions more active and engaging.",
    icon: React.createElement(VscCode),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "McDiver",
    description:
      "Developed simulation using graph algorithms and concurrency where a protagonist navigates underground tunnels to quickly exit while optimizing treasure collection.",
    tags: ["GUI", "Java", "IntelliJ"],
    imageUrl: McDiver,
  },
  {
    title: "Image Classification",
    description:
      "Utilized Support Vector Machines (SVM) to develop an algorithm to classify images into one of four categories based on their RGB values.",
    tags: ["Python", "SVM", "K-nearest neighbors"],
    imageUrl: ImageClassification,
  },
  {
    title: "Lagos Food Bank Initiative (LFBI) Portal",
    description:
      "Created a user-friendly portal for volunteers at LFBI to post events, log volunteer hours, and store/retrieve organization data.",
    tags: ["React", "Node.js", "Javascript", "Tailwind", "Prisma"],
    imageUrl: LFBI2,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "HTML",
  "CSS",
  "AutoCAD",
  "Inventor",
  "OCaml",
  "Figma",
  "Oracle",
  "Tailwind",
  "Git",
  "Next.js",
  "Node.js",
] as const;
