"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import MembershipSlider from "./membership-slider";

const Membership = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-8 xl:py-0 lg:h-[95vh] bg-membership bg-cover bg-center relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10"
      id="prices"
    >
      <div className="container mx-auto px-0 text-white h-full flex flex-col relative z-20">
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className="text-3xl text-white text-center pt-4 mb-8"
        >
          Membership
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <MembershipSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Membership;
