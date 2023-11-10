"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity/lib/client";
// import { useNextSanityImage } from 'next-sanity-image';

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my names ${pageInfo?.name}`,
      "Guy who likes to code",
      "Also watches sports",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  // const imageProps = useNextSanityImage(configuredSanityClient, mySanityData.image);

  return (
    <motion.div
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.3, 0.5, 0.7, 1.0] }}
      transition={{ duration: 2.5 }}
    >
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-8 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold ">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#0077be" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
