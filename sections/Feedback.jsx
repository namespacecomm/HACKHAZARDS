"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings}`} id="Sponsors">
    <TypingText title="| OUR SPONSORS" textStyles="text-center text-[25px]" />

    {/* <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.topPaddings} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col items-center gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient"/>
        <div className='flex flex-col items-center'>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            sponsor name
          </h4>
          <h3 className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            sponsor category
          </h3>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “about sponsor”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col items-center gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient"/>
        <div className='flex flex-col items-center'>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            sponsor name
          </h4>
          <h3 className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            sponsor category
          </h3>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “about sponsor”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col items-center gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient"/>
        <div className='flex flex-col items-center'>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            sponsor name
          </h4>
          <h3 className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            sponsor category
          </h3>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “about sponsor”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col items-center gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient"/>
        <div className='flex flex-col items-center'>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            sponsor name
          </h4>
          <h3 className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            sponsor category
          </h3>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “about sponsor”
        </p>
      </motion.div>
    </motion.div> */}

    {/* title sponsor */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:pt-8 xs:pt-8 pt-10 mx-auto flex flex-col justify-center items-center`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[80vw]  flex-col   rounded-[32px]  relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <h4 className="font-bold sm:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            TITLE SPONSOR
          </h4>
          <img src="revealing.png" alt="revealing poster" className="w-[700px] h-[250px] rounded-[25px]" />
        </div>
      </motion.div>
    </motion.div>

    {/* power sponsor */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:pt-5 xs:pt-8 pt-10 mx-auto flex flex-col justify-center items-center`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[80vw]  flex-col  relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <h4 className="font-bold sm:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            POWER SPONSOR
          </h4>
          <img src="revealing.png" alt="revealing poster" className="w-[700px] h-[250px] rounded-[25px]" />
        </div>
      </motion.div>
    </motion.div>

    
    
    {/* platform &  media sponsor */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:pt-5 xs:pt-8 pt-10 mx-auto flex gap-5 md:flex-row flex-col  justify-center items-center`}
    >
      {/* media sponsor */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5]  flex-col items-center justify-center    relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <h4 className="font-bold lg:text-[29px] text-[24px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            MEDIA SPONSORS
          </h4>
          <img src="revealing.png" alt="revealing poster" className="w-[450px]  rounded-[25px]" />
        </div>
      </motion.div>

      {/* platform sponsor */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[80vw]  flex-col  relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <h4 className="font-bold lg:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            PLATFORM SPONSORS
          </h4>
          <img src="1.png" alt="devfolio" className="w-[450px]  rounded-[25px]" />
        </div>
      </motion.div>
    </motion.div>

    {/* associate sponsor */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:pt-5 xs:pt-8 pt-10 mx-auto flex flex-col justify-center items-center`}
    >
          <h4 className="font-bold sm:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            ASSOCIATE SPONSORS
          </h4>
          <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="2.png" alt="polygon" className="w-[450px] rounded-[15px]" />
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[450px] rounded-[15px]" />
        </div>
       
        
      </motion.div>
    </motion.div>

    {/* swag sponsor */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:pt-5 xs:pt-8 pt-10 mx-auto flex flex-col justify-center items-center`}
    >
          <h4 className="font-bold sm:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            SWAG SPONSORS
          </h4>
          <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[400px] rounded-[15px]" />
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[400px] rounded-[15px]" />
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[400px] rounded-[15px]" />
        </div>
        
        
      </motion.div>
    </motion.div>

    {/* refreshment sponsor */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:pt-5 xs:pt-8 pt-10 mx-auto flex flex-col justify-center items-center`}
    >
          <h4 className="font-bold sm:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            REFRESHMENT SPONSORS
          </h4>
          <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[350px] rounded-[15px]" />
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[350px] rounded-[15px]" />
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[350px] rounded-[15px]" />
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[350px] rounded-[15px]" />
        </div>
        
        
      </motion.div>
    </motion.div>

    {/* general sponsor */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:pt-5 xs:pt-8 pt-10 mx-auto flex flex-col justify-center items-center`}
    >
          <h4 className="flex flex-col items-center z-[1] mt-[5px] font-bold sm:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            GENERAL SPONSORS
          </h4>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="3.png" alt="replit" className="w-[900px] rounded-[15px]" />
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[900px] rounded-[15px]" />
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[900px] rounded-[15px]" />
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[900px] rounded-[15px]" />
        </div>
        
      </motion.div>

      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative mt-[10px] "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[900px] rounded-[15px]" />
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[900px] rounded-[15px]" />
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[900px] rounded-[15px]" />
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <img src="revealing.png" alt="revealing poster" className="w-[900px] rounded-[15px]" />
        </div>
        
      </motion.div>
      
      
    </motion.div>
    
    

    <div className="flex items-center justify-center mt-4">
      <h4 className="font-bold md:text-[32px] text-[32px] text-white mt-3">
        Interested in sponsoring HACKHAZARDS?
      </h4>
    </div>

    <div className="flex items-center justify-center mt-2">
      <a href="https://drive.google.com/file/d/1OtvOCeghTnYlDelbP1Nj_Jiu7d1LYj6X/view">
        <button
          type="button"
          className=" flex items-center h-fit py-4 px-6 bg-[#e4dae8] rounded-[20px] gap-[15px] hover:bg-violet-300"
        >
          <img
            src="/money.png"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-black">
            See our sponsorship deck and connect with us
          </span>
        </button>
      </a>
    </div>
  </section>
);

export default Feedback;
