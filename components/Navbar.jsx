'use client';

import { useCallback, useState } from 'react';
import { MdOutlineAppRegistration, MdEmojiEvents } from 'react-icons/md';
import { IoMdContacts } from 'react-icons/io';
import { FaTeamspeak, FaQuestion } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Link } from 'react-scroll';
import styles from '../styles';

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
    <nav className="flex items-center justify-center relative ">
      <div className=" fixed top-0 z-30 flex w-full  2xl:max-w-[1280px]   justify-center sm:pb-10 pr-10 px-10 pb-4 mb-20 relative ">
        <div
          className={`${styles.innerWidth} fixed flex justify-between gap-2  bg-primary-black  `}
        >
          <div onClick={openHome} className="cursor-pointer transition">
            <img
              src="/logo.png"
              alt="menu"
              className="md:w-[180px] w-[120px] object-contain mx-6 my-3 "
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

          <div className="flex gap-10 justify-around py-10 max-lg:hidden cursor-pointer ">
            <Link
              to="About"
              activeClass="active"
              offset={-100}
              duration={500}
            >
              <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
                About
              </h2>
            </Link>

            <Link
              to="Themes"
              activeClass="active"
              offset={-100}
              duration={500}
            >
              <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
                Themes
              </h2>
            </Link>

            <Link
              to="Prizes"
              activeClass="active"
              offset={-100}
              duration={500}
            >
              <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
                Prizes
              </h2>
            </Link>

            <Link
              to="Schedule"
              activeClass="active"
              offset={-100}
              duration={500}
            >
              <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
                Schedule
              </h2>
            </Link>

            <Link
              to="Sponsors"
              activeClass="active"
              offset={-100}
              duration={500}
            >
              <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
                Sponsors
              </h2>
            </Link>

            <Link
              to="Insights"
              activeClass="active"
              offset={-100}
              duration={500}
            >
              <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
                Insights
              </h2>
            </Link>

            <Link
              to="Team"
              activeClass="active"
              offset={-100}
              duration={500}
            >
              <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
                Team
              </h2>
            </Link>

            <a href="https://www.nsccbpit.tech/">
              <h2 className="font-extrabold text-[18px] leading-[30.24px] text-white">
                NSCC
              </h2>
            </a>
          </div>

          <div
            onClick={toggleOpen}
            className="py-10 mx-3 cursor-pointer justify-center items-center "
          >
            <img
              src="/menu.svg"
              alt="menu"
              className="w-[30px] h-[30px] object-contain"
            />
          </div>
        </div>
      </div>
      <div>
        {isopen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-[250px] bg-gray-50 shadow-xl rounded-lg flex flex-col overflow-hidden absolute top-14 right-5 z-40 "
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
    </nav>
  );
};

export default Navbar;
