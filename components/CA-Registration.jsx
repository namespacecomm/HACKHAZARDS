'use client';

import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [college, setCollege] = useState('');
  const [collegeCity, setCollegeCity] = useState('');
  const [branch, setBranch] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [linkdin, setLinkdin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [github, setGithub] = useState('');
  const [twitter, setTwitter] = useState('');
  const [whyPart, setWhyPart] = useState('');

  async function handleSubmit() {
    // ev.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      contactNumber,
      college,
      collegeCity,
      branch,
      graduationYear,
      linkdin,
      instagram,
      github,
      twitter,
      whyPart,
    };
    await axios.post('/api/caData', data);
  }

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings}  relative`}
    >
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-3`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Campus Ambassador Registration
          </h4>
        </div>
      </div>

      {/* for large devices */}
      <div className="w-[60vw] mx-auto py-5 hidden md:flex">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row">
            <div className={`${styles.mb3}`}>
              <label htmlFor="name" className={`${styles.labels}`}>
                First Name:
              </label>
              <br />
              <input
                type="text"
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
                placeholder="First Name"
                className={`${styles.input}`}
                name="name"
                id="name"
              />
            </div>

            <div className={`${styles.mb3}`}>
              <label htmlFor="name" className={`${styles.labels}`}>
                Last Name:
              </label>
              <br />
              <input
                type="text"
                value={lastName}
                onChange={(ev) => setLastName(ev.target.value)}
                placeholder="Last Name"
                className={`${styles.input}`}
                name="name"
                id="name"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className={`${styles.mb3}`}>
              <label htmlFor="email" className={`${styles.labels}`}>
                Email:
              </label>
              <br />
              <input
                type="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                placeholder="Email id"
                className={`${styles.input}`}
                name="email"
                id="email"
              />
            </div>

            <div className={`${styles.mb3}`}>
              <label htmlFor="phoneNumber" className={`${styles.labels}`}>
                Contact:
              </label>
              <br />
              <input
                type="phone"
                value={contactNumber}
                onChange={(ev) => setContactNumber(ev.target.value)}
                placeholder="Phone Number "
                className={`${styles.input}`}
                name="phoneNumber"
                id="phoneNumber"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className={`${styles.mb3}`}>
              <label htmlFor="College" className={`${styles.labels}`}>
                College:
              </label>
              <br />
              <input
                type="text"
                value={college}
                onChange={(ev) => setCollege(ev.target.value)}
                placeholder="College  Name"
                className={`${styles.input}`}
                name="College"
                id="College"
              />
            </div>

            <div className={`${styles.mb3}`}>
              <label htmlFor="CollegeCity" className={`${styles.labels}`}>
                College City:
              </label>
              <br />
              <input
                type="text"
                value={collegeCity}
                onChange={(ev) => setCollegeCity(ev.target.value)}
                placeholder="City "
                className={`${styles.input}`}
                name="CollegeCity"
                id="CollegeCity"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className={`${styles.mb3}`}>
              <label htmlFor="Branch" className={`${styles.labels}`}>
                Branch:
              </label>
              <br />
              <input
                type="text"
                value={branch}
                onChange={(ev) => setBranch(ev.target.value)}
                placeholder="Branch Name"
                className={`${styles.input}`}
                name="Branch"
                id="Branch"
              />
            </div>

            <div className={`${styles.mb3}`}>
              <label htmlFor="Batch" className={`${styles.labels}`}>
                Graduation Year:
              </label>
              <br />
              <input
                type="text"
                value={graduationYear}
                onChange={(ev) => setGraduationYear(ev.target.value)}
                placeholder="Batch Year"
                className={`${styles.input}`}
                name="Batch"
                id="Batch"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className={`${styles.mb3}`}>
              <label htmlFor="LinkedIn" className={`${styles.labels}`}>
                LinkedIn:
              </label>
              <br />
              <input
                type="text"
                value={linkdin}
                onChange={(ev) => setLinkdin(ev.target.value)}
                placeholder="LinkeIn Id "
                className={`${styles.input}`}
                name="LinkedIn"
                id="LinkedIn"
              />
            </div>

            <div className={`${styles.mb3}`}>
              <label htmlFor="Instagram" className={`${styles.labels}`}>
                Instagram:
              </label>
              <br />
              <input
                type="text"
                value={instagram}
                onChange={(ev) => setInstagram(ev.target.value)}
                placeholder="Instagram Id "
                className={`${styles.input}`}
                name="Instagram"
                id="Instagram"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className={`${styles.mb3}`}>
              <label htmlFor="Github" className={`${styles.labels}`}>
                Github:
              </label>
              <br />
              <input
                type="text"
                value={github}
                onChange={(ev) => setGithub(ev.target.value)}
                placeholder="Github Link "
                className={`${styles.input}`}
                name="Github"
                id="Github"
              />
            </div>
            <div className={`${styles.mb3}`}>
              <label htmlFor="Twitter" className={`${styles.labels}`}>
                Twitter:
              </label>
              <br />
              <input
                type="text"
                value={twitter}
                onChange={(ev) => setTwitter(ev.target.value)}
                placeholder="Twitter Link "
                className={`${styles.input}`}
                name="Twitter"
                id="Twitter"
              />
            </div>
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="answers" className={`${styles.labels}`}>
              Why you wanna be a part of HACKHAZARDS:
            </label>
            <br />
            <textarea
              className="mt-[5px] mx-[15px] min-h-[30vh] min-w-[52vw] bg-[#25618B] p-3 lg:text-[15px] md:text-[10px] sm:text-[6px] text-[10px] text-white rounded-[13px]"
              value={whyPart}
              onChange={(ev) => setWhyPart(ev.target.value)}
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

      {/* for small devices */}
      <div className="w-[90vw] mx-[10px] py-5 flex-col md:hidden">
        <form onSubmit={handleSubmit}>
          <div className={`${styles.mb3}`}>
            <label htmlFor="name" className={`${styles.labels}`}>
              First Name:
            </label>
            <br />
            <input
              type="text"
              value={firstName}
              onChange={(ev) => setFirstName(ev.target.value)}
              placeholder="First Name"
              className={`${styles.inputS}`}
              name="name"
              id="name"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="name" className={`${styles.labels}`}>
              Last Name:
            </label>
            <br />
            <input
              type="text"
              value={lastName}
              onChange={(ev) => setLastName(ev.target.value)}
              placeholder="Last Name"
              className={`${styles.inputS}`}
              name="name"
              id="name"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="email" className={`${styles.labels}`}>
              Email:
            </label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Email id"
              className={`${styles.inputS}`}
              name="email"
              id="email"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="phoneNumber" className={`${styles.labels}`}>
              Contact:
            </label>
            <br />
            <input
              type="phone"
              value={contactNumber}
              onChange={(ev) => setContactNumber(ev.target.value)}
              placeholder="Phone Number "
              className={`${styles.inputS}`}
              name="phoneNumber"
              id="phoneNumber"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="College" className={`${styles.labels}`}>
              College:
            </label>
            <br />
            <input
              type="text"
              value={college}
              onChange={(ev) => setCollege(ev.target.value)}
              placeholder="College  Name"
              className={`${styles.inputS}`}
              name="College"
              id="College"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="CollegeCity" className={`${styles.labels}`}>
              College City:
            </label>
            <br />
            <input
              type="text"
              value={collegeCity}
              onChange={(ev) => setCollegeCity(ev.target.value)}
              placeholder="City "
              className={`${styles.inputS}`}
              name="CollegeCity"
              id="CollegeCity"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="Branch" className={`${styles.labels}`}>
              Branch:
            </label>
            <br />
            <input
              type="text"
              value={branch}
              onChange={(ev) => setBranch(ev.target.value)}
              placeholder="Branch Name"
              className={`${styles.inputS}`}
              name="Branch"
              id="Branch"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="Batch" className={`${styles.labels}`}>
              Graduation Year:
            </label>
            <br />
            <input
              type="text"
              value={graduationYear}
              onChange={(ev) => setGraduationYear(ev.target.value)}
              placeholder="Batch Year"
              className={`${styles.inputS}`}
              name="Batch"
              id="Batch"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="LinkedIn" className={`${styles.labels}`}>
              LinkedIn:
            </label>
            <br />
            <input
              type="text"
              value={linkdin}
              onChange={(ev) => setLinkdin(ev.target.value)}
              placeholder="LinkeIn Id "
              className={`${styles.inputS}`}
              name="LinkedIn"
              id="LinkedIn"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="Instagram" className={`${styles.labels}`}>
              Instagram:
            </label>
            <br />
            <input
              type="text"
              value={instagram}
              onChange={(ev) => setInstagram(ev.target.value)}
              placeholder="Instagram Id "
              className={`${styles.inputS}`}
              name="Instagram"
              id="Instagram"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="Github" className={`${styles.labels}`}>
              Github:
            </label>
            <br />
            <input
              type="text"
              value={github}
              onChange={(ev) => setGithub(ev.target.value)}
              placeholder="Github Link "
              className={`${styles.inputS}`}
              name="Github"
              id="Github"
            />
          </div>
          <div className={`${styles.mb3}`}>
            <label htmlFor="Twitter" className={`${styles.labels}`}>
              Twitter:
            </label>
            <br />
            <input
              type="text"
              value={twitter}
              onChange={(ev) => setTwitter(ev.target.value)}
              placeholder="Twitter Link "
              className={`${styles.inputS}`}
              name="Twitter"
              id="Twitter"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="answers" className={`${styles.labels}`}>
              Why you wanna be a part of HACKHAZARDS:
            </label>
            <br />
            <textarea
              className="mt-[5px] mx-[15px] min-h-[30vh] w-[80%] bg-[#25618B] p-3 lg:text-[15px] md:text-[10px] sm:text-[6px] text-[10px] text-white rounded-[13px]"
              value={whyPart}
              onChange={(ev) => setWhyPart(ev.target.value)}
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
};

export default Registration;
