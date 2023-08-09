'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Hack it Together" textStyles="text-center text-[25px]" />
      <TitleText
        title={(
          <>Invite friends around you to hack together in HACKHAZARDS
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>

      <div className="flex items-center justify-center my-3 mb-10">
        <a href="#">
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#ffffff] rounded-[20px] gap-[12px] hover:bg-indigo-50">
          <img
            src="/people.png"
            alt="people"
            className="w-[48px] h-[48px] object-contain"
          />
          <span className="font-normal text-[32px] text-black">
            Invite others to HACKHAZARDS
          </span>
        </button>
        </a>
      </div>
    </motion.div>
  </section>
);

export default World;
