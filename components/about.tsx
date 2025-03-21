"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently pursuing a Bachelor's in <span className="font-semibold">Computer Science</span> at
        <span className="font-semibold"> COMSATS University Islamabad, Sahiwal Campus</span>. Alongside my studies, I have been actively learning
        <span className="font-semibold"> full-stack web development</span>. My core stack includes
        <span className="font-semibold"> React, Next.js, Node.js, and MongoDB</span>, and I am also
        proficient in <span className="font-semibold">TypeScript, PostgreSQL, and Prisma</span>.
      </p>
      <p className="mb-3">
        I am always eager to learn new technologies and take on challenging projects. Currently, I am seeking a
        <span className="font-semibold"> part-time role</span> where I can apply my skills and grow professionally.
        Additionally, I am expanding my freelancing presence on <span className="font-semibold">Fiverr</span> and
        <span className="font-semibold"> Upwork</span>, helping businesses establish a strong web presence.
      </p>

    </motion.section>
  );
}
