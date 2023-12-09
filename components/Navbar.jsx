'use client';

import { useCallback, useState } from 'react';
import { MdOutlineAppRegistration, MdEmojiEvents } from 'react-icons/md';
import { IoMdContacts } from 'react-icons/io';
import { FaTeamspeak, FaQuestion } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { navVariants } from '../utils/motion';
import styles from '../styles';

// import {
//   About,
//   Explore,
//   Feedback,
//   GetStarted,
//   Hero,
//   Insights,
//   WhatsNew,
//   World,
//   Prizes,
//   Team,
// } from '../sections';

const Navbar = () => {
  const router = useRouter();
  const openContactUs = () => {
    router.push('/Contact');
  };

  const openCPRegistration = () => {
    router.push('/CPRegister');
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
      className="sm:pl-10 pr-10 px-6 py-6 relative"
    >
      <div className={`${styles.innerWidth}  flex justify-between gap-2 z-1`}>
        <div onClick={openHome} className="cursor-pointer transition">
          <img
            src="/logo.png"
            alt="menu"
            className="md:w-[180px] w-[120px] object-contain"
          />
        </div>

        {/* <div>
          <a href="https://www.nsccbpit.tech/">
            <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
              NEWTON SCHOOL CODING CLUB, BPIT
            </h2>
            <img
              src="logoNSCC.png"
              alt="Nscc Logo"
              className="md:w-[15vw] w-[100px] object-contain"
            />
          </a>
        </div> */}

        <div className="flex gap-8 justify-around py-6 max-lg:hidden ">
          <a href="About">
            <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
              About
            </h2>
          </a>

          <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
            Themes
          </h2>
          <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
            Prizes
          </h2>
          <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
            Schedule
          </h2>

          <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
            Sponsors
          </h2>

          <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
            Insights
          </h2>
          <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
            Team
          </h2>
          <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
            NSCC
          </h2>
        </div>

        <div
          onClick={toggleOpen}
          className="py-5 cursor-pointer justify-center items-center "
        >
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[30px] h-[30px] object-contain"
          />
        </div>
      </div>
      <div>
        {isopen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-[250px] bg-gray-50 shadow-xl rounded-lg flex flex-col overflow-hidden absolute top-14 right-5 z-20 "
          >
            <div className="flex flex-col items-center cursor-pointer">
              <p
                onClick={openTeamGuidelines}
                className="w-full justify-center px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                Team Guidelines
                <FaTeamspeak />
              </p>

              <p
                onClick={openEvents}
                className="w-full justify-center px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                Events <MdEmojiEvents />
              </p>

              <p
                onClick={openFAQ}
                className="w-full justify-center px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                FAQ <FaQuestion />
              </p>

              <p
                onClick={openContactUs}
                className="w-full justify-center px-4 py-2 flex  items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                Contact Us <IoMdContacts />
              </p>

              <p
                onClick={openCPRegistration}
                className="m-2 px-4 py-2 rounded-md shadow-md  flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                Community Partners
                <MdOutlineAppRegistration />
              </p>
              <p
                onClick={openRegistration}
                className="m-2 px-4 py-2 rounded-md shadow-md  flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                Campus Ambassadors
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
