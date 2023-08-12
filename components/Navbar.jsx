'use client';

import { useCallback, useState } from 'react';
import { MdOutlineAppRegistration } from 'react-icons/md';
import { IoMdContacts } from 'react-icons/io';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          NEWTON SCHOOL CODING CLUB, BPIT
        </h2>
        <div
          onClick={toggleOpen}
          className="
       md:py-1
       md:px-2
       flex flex-row
       gap-3
       cursor-pointer
       hover: shadow-md
       transition"
        >
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
          />
        </div>
      </div>
      <div>
        {isopen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col overflow-hidden absolute top-15 right-5"
          >
            <div className="flex flex-col cursor-pointer">
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                Contact Us <IoMdContacts />
              </p>
              <a href="https://devfolio.co/discover?auth=signup">
                <p className="m-2 px-4 py-2 rounded-md shadow-md  flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                  Register <MdOutlineAppRegistration />
                </p>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
