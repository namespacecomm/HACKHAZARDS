import { motion } from "framer-motion";
// import { TypingText } from "../components";
import { fadeIn } from "../utils/motion";

const Schedule = () => (
  <div style={{ marginTop: "-260px" }} id="Schedule"> {/* Using  negative margin to fix the gap */}
    <motion.div
      variants={fadeIn("right", "tween", 0.2, 1)}
    >
      <div className="justify-center items-center w-full flex relative">
        <img
          src="/SCHEDULE.png"
          alt=""
          className="w-full max-w-none"
          style={{ transform: 'scale(0.6)' }} // Scale down the image to 80%
        />
      </div>
    </motion.div>
  </div>
);

export default Schedule;
