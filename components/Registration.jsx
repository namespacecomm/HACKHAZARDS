'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const handleSubmit = (e) => {
  e.preventDefault();
};

const Registration = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings}  relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-3`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Campus Ambassador Form
        </h4>
      </div>
    </div>

    <div className={`${styles.container} py-5 hidden md:flex`}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <div className={`${styles.mb3}`}>
            <label htmlFor="name" className={`${styles.labels}`}>
              First Name:
            </label>
            <br />
            <input
              type="text"
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
    <div className={`${styles.container} py-5 flex-col md:hidden`}>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.mb3}`}>
          <label htmlFor="name" className={`${styles.labels}`}>
            First Name:
          </label>
          <br />
          <input
            type="text"
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
            placeholder="Last Name"
            className={`${styles.input}`}
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
            placeholder="Phone Number "
            className={`${styles.input}`}
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
            placeholder="City "
            className={`${styles.input}`}
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
            placeholder="Batch Year"
            className={`${styles.input}`}
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
            placeholder="Instagram Id "
            className={`${styles.input}`}
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
            placeholder="Twitter Link "
            className={`${styles.input}`}
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
            className="mt-[5px] mx-[15px] min-h-[30vh] min-w-[52vw] bg-[#25618B] p-3 lg:text-[15px] md:text-[10px] sm:text-[6px] text-[10px] text-white rounded-[13px]"
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

export default Registration;
