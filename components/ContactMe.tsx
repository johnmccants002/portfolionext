"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "@/typings";

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

type Props = {
  pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:johnmccants002@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.message} (${formData.email}).})`;
  };

  return (
    <div className="md:h-screen  flex relative flex-col text-center md:text-left xl:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 md:top-12 tracking-[20px] uppercase text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col-reverse space-y-6 md:flex-row-reverse items-center md:gap-12 justify-center">
        <div className="space-y-10 py-12">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#0077be] h-7 w-7 animate-pulse" />
            <p className="text-xl">+1 916-479-4366</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#0077be] h-7 w-7 animate-pulse" />
            <p className="text-xl">johnmccants002@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#0077be] h-7 w-7 animate-pulse" />
            <p className="text-xl">Sacramento, CA</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#0077be] py-5 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
