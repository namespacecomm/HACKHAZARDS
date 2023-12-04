'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className="sm:py-8 xs:py-4 py-5 sm:pl-16 pl-6">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className=" flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          HACKHAZARDS
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-1 relative"
        />

<div className="md:flex-row flex flex-col justify-center items-center  my-10 mb-5 gap-5 pr-6 z-2">
        <a href="#">
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[20px] gap-[12px] hover:bg-[#102f45] "
          >
            {/* <img
              src="/devfolio.png"
              alt="devfolio"
              className="lg:w-[48px] lg:h-[48px] w-[35px] h-[35px] object-contain"
            /> */}
            <span className="font-bold lg:text-[40px] text-[18px] text-white ">
              Registrations starting soon!
            </span>
          </button>
        </a>
        <a href="#">
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[20px] gap-[12px] hover:bg-[#102f45] "
          >
            <img
              src="/discord-mark-white.svg"
              alt="devfolio"
              className="lg:w-[48px] lg:h-[48px] w-[35px] h-[35px] object-contain"
            />
            <span className="font-bold lg:text-[40px] text-[18px] text-white ">
              Discord Server
            </span>
          </button>
        </a>
      </div>

      <div className=" flex justify-center items-center  my-3 mb-5 gap-5 pr-6 font-medium lg:text-[30px] text-[25px] text-white hover:underline hover:text-[#25618B]">
        <a href="https://docs.google.com/document/d/1rBz992a_-oChxud9umkL8_s_twOhSJx959aE1Bez0R0/edit?usp=sharing">
          Code of Conduct
        </a>
        
      </div>

        
      </motion.div>

     
    </motion.div>
      
  </section>
);

export default Hero;
