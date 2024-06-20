"use client";

import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./ui/custom-button";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlider = () => {
  return (
    <SwiperSlide>
      <div className="full flex justify-end pt-64">
        <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="h1 text-center lg:text-left mb-2"
          ><span>make </span>
            <span className="text-accent">pain</span> into <span className="text-accent">power</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="text-white text-xl text-center lg:text-left mb-4"
          >
            Conquer Every Challenge, Defy Every Limit, Become Unstoppable
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
          >
            <CustomButton
              text="Get started"
              containerStyles="w-[196px] h-[62px] "
            />
          </motion.div>
        </div>
      </div>
    </SwiperSlide>

  );
};

export default HeroSlider;
