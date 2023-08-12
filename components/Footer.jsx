'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          HACKHAZARDS
        </h4>
        <div>
          <a href="https://devfolio.co/discover?auth=signup">
            <div>
              <button
                type="button"
                className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[20px] gap-[12px] hover:bg-white"
              >
                <img
                  src="/devfolio.png"
                  alt="devfolio"
                  className="w-[48px] h-[48px] object-contain"
                />
                <span className="font-normal text-[30px] text-white hover:text-black">
                  Register with Devfolio
                </span>
              </button>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <a href="https://www.nsccbpit.tech/">
            <h4 className="font-extrabold text-[24px] text-white">
              NEWTON SCHOOL <br />
              CODING CLUB, BPIT
            </h4>
          </a>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 - 2024 NEWTON SCHOOL CODING CLUB,BPIT. All rights
            reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.link}>
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
