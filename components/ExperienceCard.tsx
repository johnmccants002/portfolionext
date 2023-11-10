"use client";

import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity/lib/client";

type Props = {
  experience: Experience;
};

function formatDate(date) {
  // Get the month, day, and year from the date object
  var month = date.getMonth() + 1; // Months are zero-based
  var day = date.getDate();
  var year = date.getFullYear();

  // Add leading zeros to month and day if they are less than 10
  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;

  // Format the date as "mm-dd-yyyy"
  var formattedDate = month + "-" + day + "-" + year;
  return formattedDate;
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-8 flex-shrink-0 sm:w-[500px] md:w-[500px] xl:w-[900px] snap-center bg-[#292929] p-8 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        src={urlFor(experience?.companyImage).url()}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              className="h-10 w-10 rounded-full"
              src={technology.image ? urlFor(technology.image).url() : ""}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started {formatDate(new Date(experience?.dateStarted))} -
          {experience?.isCurrentlyWorking
            ? `Current`
            : `Ended ${experience?.dateEnded}`}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
