"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-12 tracking-[20px] uppercase text-gray-500 text-2xl">
        Skills
      </h3>

      <motion.div className="grid grid-cols-4 gap-5">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </motion.div>

      <motion.div className="grid grid-cols-4 gap-5"></motion.div>
    </motion.div>
  );
}

export default Skills;
