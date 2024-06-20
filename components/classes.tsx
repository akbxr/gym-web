"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./ui/custom-button";

const classes = [
  {
    name: "body building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description:
      "Unleash your potential with our advanced bodybuilding programs and expert guidance!",
  },
  {
    name: "cardio",
    img: "/assets/img/classes/cardio.jpg",
    description:
      "Elevate your heart rate and fitness with our exhilarating cardio workouts!",
  },
  {
    name: "fitness",
    img: "/assets/img/classes/fitness.jpg",
    description:
      "Achieve your peak performance with our comprehensive fitness programs and state-of-the-art facilities!",
  },
  {
    name: "crossfit",
    img: "/assets/img/classes/crossfit.jpg",
    description:
      "Transform your strength and agility with our high-intensity CrossFit workouts and expert coaching!",
  },
];

const Classes = () => {
  return (
    <section className="" id="class">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classes.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
          >
            {/* overlay */}
            <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover"
            />
            {/* text & btn */}
            <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
              <motion.h3
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="h3 text-accent"
              >
                {item.name}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="text-white"
              >
                {item.description}
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <CustomButton
                  containerStyles="w-[164px] h-[46px]"
                  text="Read more"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Classes;
