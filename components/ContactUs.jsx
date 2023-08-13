'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const handleSubmit = (e) => {
  e.preventDefault();
};

const ContactUs = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Contact Us
        </h4>
      </div>
    </div>

    <div className={`${styles.container}`}>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.mb3}`}>
          <label htmlFor="name" className={`${styles.labels}`}>
            Name:
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className={`${styles.input}`}
            name="name"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>

        <div className={`${styles.mb3}`}>
          <label htmlFor="email" className={`${styles.labels}`}>
            Email:
          </label>
          <input
            type="email"
            placeholder="Email id"
            className={`${styles.input}`}
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>

        <div className={`${styles.mb3}`}>
          <label htmlFor="phoneNumber" className={`${styles.labels}`}>
            Contact Number:
          </label>
          <input
            type="phone"
            placeholder="Phone Number "
            className={`${styles.input}`}
            name="phoneNumber"
            id="phoneNumber"
            aria-describedby="emailHelp"
          />
        </div>

        <div className={`${styles.mb3}`}>
          <label htmlFor="answers" className={`${styles.labels}`}>
            Query:
          </label>
          <textarea
            className="min-h-[30vh] min-w-[35vw] bg-[#25618B] p-3 lg:text-[20px] md:text-[10px] sm:text-[6px] text-[10px] text-white rounded"
            placeholder="Why we should make you one? "
            name="answers"
            id="answers"
          />
        </div>

        <button
          type="submit"
          className="bg-[#25618B] rounded-[10px] p-2 m-2 hover:bg-white hover:text-black mx-[15px] font-semibold lg:text-[25px] md:text-[15px] sm:text-[8px] text-[15px] text-white"
        >
          Submit
        </button>
      </form>
    </div>
  </motion.footer>
);

export default ContactUs;
