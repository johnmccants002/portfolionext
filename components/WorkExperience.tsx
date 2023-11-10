"use client";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div className="h-screen flex space-y-12 relative overflow-hidden flex-col text-lft md:flex-row max-w-full sm:px-4 md:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute md:top-12 top:24 tracking-[20px] uppercase text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience._id} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
