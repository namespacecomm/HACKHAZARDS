'use client';

import { Fragment, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import Model from './Model';
import Model2 from './Model2';
import Model3 from './Model3';

const Prizes = () => {

  const [isopen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const [isopen2, setIsOpen2] = useState(false);
  const toggleOpen2 = useCallback(() => {
    setIsOpen2((value) => !value);
  }, []);

  const [isopen3, setIsOpen3] = useState(false);
  const toggleOpen3 = useCallback(() => {
    setIsOpen3((value) => !value);
  }, []);

  return (
    <Fragment>
    <section className={`${styles.paddings}`}>
      

      <TypingText
        title="| PRIZES"
        textStyles="text-center text-[25px] font-bold mb-[55px]"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} ${styles.topPaddings} mx-auto flex lg:flex-row flex-col gap-6 z-[10]`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
        >
          <div className="justify-center items-center w-full flex">
            <img
              src="/first.png"
              alt=""
              className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
            />
            <div className=" absolute w-[150px] h-[150px] hero-gradient1 rounded-[100px] z-[0] -top-[60px] " />
            <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
          </div>

          <div className="flex flex-col items-center z-[1] mt-[80px]">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[30px]">
              First Prize
            </h4>
            <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[10px]">
              Total prize of{" "}
              <span className="font-extrabold text-white">$ X,XXX</span>
              <br />
            </h5>
            <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Cash prize of{" "}
              <span className="font-extrabold text-white">₹ 25,000</span> <br />
            </h5>
            <h5
              className="mt-[8px] font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white mt-[50px] hover:underline cursor-pointer mb-[15px]"
              onClick={toggleOpen}
            >
              Know More <br />
            </h5>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
        >
          <div className="justify-center items-center w-full flex">
            <img
              src="/second.png"
              alt=""
              className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
            />

            <div className=" absolute w-[150px] h-[150px] hero-gradient3 rounded-[100px] z-[0] -top-[60px] " />
            <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
          </div>

          <div className="flex flex-col items-center z-[1] mt-[80px]">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[30px]">
              Second Prize
            </h4>
            <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[10px]">
              Total prize of{" "}
              <span className="font-extrabold text-white">$ X,XXX</span>
              <br />
            </h5>
            <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Cash prize of{" "}
              <span className="font-extrabold text-white">₹ 15,000</span> <br />
            </h5>
            <h5 className="mt-[8px] font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white mt-[50px] hover:underline cursor-pointer mb-[15px]"
            onClick={toggleOpen2}>
              Know More <br />
            </h5>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
        >
          <div className="justify-center items-center w-full flex">
            <img
              src="/third.png"
              alt=""
              className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
            />

            <div className=" absolute w-[150px] h-[150px] hero-gradient4 rounded-[100px] z-[0] -top-[60px] " />
            <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
          </div>

          <div className="flex flex-col items-center z-[1] mt-[80px]">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[30px]">
              Third Prize
            </h4>
            <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[10px]">
              Total prize of{" "}
              <span className="font-extrabold text-white">$ XXX</span>
              <br />
            </h5>
            <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Cash prize of{" "}
              <span className="font-extrabold text-white">₹ 10,000</span> <br />
            </h5>
            <h5 className="mt-[8px] font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white mt-[50px] hover:underline cursor-pointer mb-[15px]"
            onClick={toggleOpen3}>
              Know More <br />
            </h5>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} ${styles.topPaddings} mx-auto flex lg:flex-row flex-col gap-6 z-[10] mt-[20px]`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
        >
          <div className="justify-center items-center w-full flex">
            {/* <img
              src="/.png"
              alt="TRACK LOGO"
              className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
            /> */}
            
            <div className=" absolute w-[150px] h-[150px] hero-gradient rounded-[100px] z-[0] -top-[60px] " />
            <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
          </div>

          <div className="flex flex-col items-center z-[1] mt-[80px]">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[30px]">
              Track 
            </h4>
            <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[10px]">
              Total prize of{" "}
              <span className="font-extrabold text-white">$ XXX</span>
              <br />
            </h5>
            <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Cash prize of{" "}
              <span className="font-extrabold text-white">₹ X,XXX</span> <br />
            </h5>
            <h5
              className="mt-[8px] font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white mt-[50px] hover:underline cursor-pointer mb-[15px]"
              onClick={toggleOpen}
            >
              Know More <br />
            </h5>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
        >
          <div className="justify-center items-center w-full flex">
            {/* <img
              src="/.png"
              alt="TRACK LOGO"
              className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
            /> */}
            
            <div className=" absolute w-[150px] h-[150px] hero-gradient rounded-[100px] z-[0] -top-[60px] " />
            <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
          </div>

          <div className="flex flex-col items-center z-[1] mt-[80px]">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[30px]">
              Track 
            </h4>
            <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[10px]">
              Total prize of{" "}
              <span className="font-extrabold text-white">$ XXX</span>
              <br />
            </h5>
            <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Cash prize of{" "}
              <span className="font-extrabold text-white">₹ X,XXX</span> <br />
            </h5>
            <h5
              className="mt-[8px] font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white mt-[50px] hover:underline cursor-pointer mb-[15px]"
              onClick={toggleOpen}
            >
              Know More <br />
            </h5>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
        >
          <div className="justify-center items-center w-full flex">
            {/* <img
              src="/.png"
              alt="TRACK LOGO"
              className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
            /> */}
            
            <div className=" absolute w-[150px] h-[150px] hero-gradient rounded-[100px] z-[0] -top-[60px] " />
            <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
          </div>

          <div className="flex flex-col items-center z-[1] mt-[80px]">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[30px]">
              Track 
            </h4>
            <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[10px]">
              Total prize of{" "}
              <span className="font-extrabold text-white">$ XXX</span>
              <br />
            </h5>
            <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Cash prize of{" "}
              <span className="font-extrabold text-white">₹ X,XXX</span> <br />
            </h5>
            <h5
              className="mt-[8px] font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white mt-[50px] hover:underline cursor-pointer mb-[15px]"
              onClick={toggleOpen}
            >
              Know More <br />
            </h5>
          </div>
        </motion.div>

       
      </motion.div>
      
      <Model isVisible={isopen} onClose={toggleOpen} />
      <Model2 isVisible={isopen2} onClose={toggleOpen2} />
      <Model3 isVisible={isopen3} onClose={toggleOpen3} />
      
      

      
    </section>
    </Fragment>
  );
};

export default Prizes;
