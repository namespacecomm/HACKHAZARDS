"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import MentorCards from "./MentorCard";

const MentorRegistration = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings}  relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-3 items-center justify-center`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="flex items-center font-bold md:text-[64px] text-[44px] text-white mt-[100px]">
          Our  Mentors
        </h4>
      </div>
    </div>
    <MentorCards />

  </motion.footer>
);

export default MentorRegistration;
