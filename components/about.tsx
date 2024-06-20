"use client";

import { FaUser } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Achievements from "./achievements";

const featured = [
  {
    icon: <FaUser />,
    title: "award-winning trainers",
    subtitle:
      "Our award-winning trainers are the heart of our gym, bringing a wealth of experience, passion, and dedication to every session ",
  },
  {
    icon: <IoIosPricetags />,
    title: "excellent prices",
    subtitle:
      "At our gym, we believe that top-tier fitness shouldn't come with a hefty price tag. That's why we offer excellent prices that make achieving your fitness goals accessible to everyone",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:
      "Our gym is equipped with the latest in modern fitness technology, ensuring you have the best tools to achieve your goals",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[600px] text-lg mx-auto leading-relaxed text-center"
          >

            Welcome to our gym, where we believe in turning pain into power. Our mission is to help you conquer every challenge and defy every limit, guiding you on your journey to becoming unstoppable. We provide a supportive and motivating environment, equipped with top-notch facilities and expert trainers dedicated to your success. Join us and transform your sweat into strength, your effort into excellence, and your potential into performance. At our gym, you don’t just work out—you level up.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full bg-white text-black lg:w-1/2">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-12 text-center md:px-10 md:py-24 md:text-left lg:px-20 lg:py-36">
              <div>
                <motion.h2
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="mb-4 h2 font-semibold tracking-tight text-black ">
                  Our History
                </motion.h2>
                <motion.p variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-lg font-normal leading-relaxed ">
                  Founded in 2024, our gym started as a small, passionate community of fitness enthusiasts dedicated to transforming lives through exercise and wellness. Over the years, we have grown and evolved, continually upgrading our facilities and expanding our offerings to meet the diverse needs of our members. Our commitment to excellence and innovation has propelled us to become a leading fitness destination in the area. From humble beginnings to our state-of-the-art current location, we remain focused on helping our members achieve their personal best.
                </motion.p>
              </div>
            </div>
          </div>

          <div className="w-full bg-white text-black lg:w-1/2">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-12 text-center md:px-10 md:py-24 md:text-left lg:px-20 lg:py-36">
              <div>
                <motion.h2
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="mb-4 h2 font-semibold tracking-tight text-black">
                  Our Culture
                </motion.h2>
                <motion.p variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-lg font-normal leading-relaxed ">
                  Our gym culture is built on a foundation of empowerment, inclusivity, and community. We believe in fostering a supportive environment where everyone, regardless of their fitness level or background, feels welcome and motivated. Our members are encouraged to push their limits, celebrate their achievements, and support one another on their fitness journeys. We emphasize continuous learning and improvement, both for our staff and our members, promoting a culture of health, wellness, and personal growth. At our gym, we don't just work out together—we thrive together.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 border-2 rounded-xl p-10"
            >
              <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                {feature.icon}
              </div>
              <div className="flex flex-col justify-center items-center gap-2 text-center">
                <p className="font-oswald uppercase text-accent text-2xl">{feature.title}</p>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
        {/* achievements */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

