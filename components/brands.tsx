"use client";

import Image from "next/image";
// import Link from "next/link";

import { motion } from "framer-motion";

const brandsImages = [
  {
    src: "/assets/img/brands/brand-1.png",
  },
  {
    src: "/assets/img/brands/brand-2.png",
  },
  {
    src: "/assets/img/brands/brand-3.png",
  },
  {
    src: "/assets/img/brands/brand-4.png",
  },
];

// variants
const brandContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const brandItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Brands = () => {
  return (
    <section className="pb-8" id="contact">
      <div className="container mx-auto">
        <motion.div
          variants={brandContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 px-8 justify-items-center"
        >
          {brandsImages.map((img, index) => {
            return (
              <motion.div variants={brandItem} key={index}>
                <Image
                  src={img.src}
                  width={204}
                  alt="brand"
                  height={106}
                  className="opacity-50 group-hover:opacity-100 transition-all mx-auto"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;