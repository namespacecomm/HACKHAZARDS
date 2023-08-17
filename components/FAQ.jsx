'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { FaqQuestion } from '../constants';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} relative`}
    >
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            FAQs
          </h4>
        </div>
      </div>
      <div className="mt-[20px] mb-[50px] px-[60px] ">
        <div className="px-[40px] text-black max-w-[800px] mx-auto">
          {FaqQuestion.map((data, index) => (
            <div key={index} className="p-[10px]">
              <div
                className="bg-[#25618B] py-[25px] px-[50px] text-white flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <p className="text-[22px] font-bold">{data.title}</p>
                <div className=" text-[30px]">
                  {openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </div>
              {openIndex === index && (
                <div className="bg-[#25618B] px-[50px] text-white text-[18px] pb-[20px]">
                  {data.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default FAQ;
