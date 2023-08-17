'use client';

import { useCallback, useState } from 'react';
import { MdOutlineAppRegistration, MdEmojiEvents } from 'react-icons/md';
import { IoMdContacts } from 'react-icons/io';
import { FaTeamspeak, FaQuestion } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const Navbar = () => {
  const router = useRouter();
  const openContactUs = () => {
    router.push('/Contact');
  };

  const openRegistration = () => {
    router.push('/Register');
  };

  const openEvents = () => {
    router.push('/Event');
  };

  const openTeamGuidelines = () => {
    router.push('/Guidelines');
  };

  const openFAQ = () => {
    router.push('/Faq');
  };

  const openHome = () => {
    router.push('/');
  };

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
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8 z-1`}
      >
        <div
          onClick={openHome}
          className="cursor-pointer transition"
        >
          <img
            src="/home.png"
            alt="menu"
            className="w-[35px] h-[35px] object-contain"
          />
        </div>

        <div>
          <a href="https://www.nsccbpit.tech/">
            <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
              NEWTON SCHOOL CODING CLUB, BPIT
            </h2>
          </a>
        </div>

        <div
          onClick={toggleOpen}
          className="cursor-pointer"
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
            className="w-[17vw] bg-gray-50 shadow-xl rounded-lg flex flex-col overflow-hidden absolute top-15 right-5 z-20 "
          >
            <div className="flex flex-col items-center cursor-pointer">
              <p
                onClick={openTeamGuidelines}
                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                Team Guidelines
                <FaTeamspeak />
              </p>

              <p
                onClick={openEvents}
                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                Events <MdEmojiEvents />
              </p>

              <p
                onClick={openFAQ}
                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                FAQ <FaQuestion />
              </p>

              <p
                onClick={openContactUs}
                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                Contact Us <IoMdContacts />
              </p>

              <p
                onClick={openRegistration}
                className="m-2 px-4 py-2 rounded-md shadow-md  flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                CA Registration
                <MdOutlineAppRegistration />
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
