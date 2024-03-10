import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import MentorCards from "./MentorCard";

const MentorList = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings}  relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-3 items-center justify-center`}>
      <h4 className="flex items-center font-bold md:text-[64px] text-[44px] text-white mt-[100px]">
        Our Mentors
      </h4>
    </div>
    {/* Center aligning the MentorCards component */}
    <div className=" ml-6 flex justify-center">
      <MentorCards />
    </div>
  </motion.footer>
);

export default MentorList;
