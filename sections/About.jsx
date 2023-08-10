"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About HACKHAZARDS"
        textStyles="text-center text-[25px] font-bold "
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">HACKHAZARDS</span> is not
        just an ordinary hackathon; it is a remarkable{" "}
        <span className="font-extrabold text-white">24-hour</span> experience
        that redefines traditional coding events. It stands out by combining the
        thrill of{" "}
        <span className="font-extrabold text-white">
          brainstorming, innovation, and entertainment
        </span>
         , making it an unforgettable
        journey for all participants. HACKHAZARDS embraces diversity and
        inclusivity by covering multiple domains, ensuring a wide array of
        challenges to attract students from various fields and expertise levels.{" "}
        Let's{" "}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
