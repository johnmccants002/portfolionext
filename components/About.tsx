"use client";
import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity/lib/client";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center md:px-40"
    >
      <h3 className="absolute top-24 md:top-12 lg:top-12 tracking-[20px] uppercase text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        src={urlFor(pageInfo?.profilePic).url()}
        initial={{ x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#0077be]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
