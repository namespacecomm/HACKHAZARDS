import React from "react";
import { Navbar, Footer } from "../components";
import ProjectList from "../components/projectList";
import { BackgroundBeamsWithCollision } from "../components/ui/background";
import { motion } from "framer-motion"; // Import framer-motion for animations

const Projects = () => {
  return (
    <div className="bg-primary-black overflow-hidden flex flex-col min-h-screen font-league w-full">
      <Navbar />
      <div className="outer">
        <BackgroundBeamsWithCollision>
          <main className="main flex-grow flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-12">
            <h1 className="tagline tagline-1 z-20">
              Building The <span className="highlight">Future</span>, One Hack
              At A Time:
            </h1>

            {/* Apply motion.div for swipe effect on tagline-2 */}
            <motion.h1
              className="tagline tagline-2 z-20"
              initial={{ x: "-100%" }} // Starts off-screen to the left
              animate={{ x: 0 }} // Animates to its normal position
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.5, // Adds a slight delay before animation
              }}
            >
              <i>
                Showcasing{" "}
                <span className="highlight-innovation">Innovation</span> From{" "}
                <span className="highlight-hackhazards">HackHazards</span>{" "}
                Hackathon
              </i>
            </motion.h1>
          </main>
        </BackgroundBeamsWithCollision>
      </div>
      <ProjectList />
      <Footer />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap");

        body {
          font-family: "League Spartan", sans-serif; /* Apply the font globally */
          margin: 0;
          padding: 0;
        }

        .outer {
          width: 80%;
          padding-bottom: 2rem;
          border-bottom: 4px solid white;
          margin-left: 10%;
        }

        .main {
          text-align: center;
          margin-top: 15vh; /* Margin dynamic with screen size */
          margin-bottom: 2rem; /* margin with rem for consistent scaling */
          padding-left: 5vw; /* Dynamic padding */
          padding-right: 5vw; /* Dynamic padding */
        }

        .tagline {
          font-family: "League Spartan", sans-serif; /* Apply the font specifically to taglines */
          font-weight: 700;
          color: #ffffff; /* White text */
          text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
          cursor: default;
        }

        .tagline-1 {
          font-size: 4vw; /* Dynamic font-size based on viewport width */
          animation: fadeIn 1s ease-out;
        }

        .tagline-2 {
          font-size: 3vw; /* Dynamic font-size based on viewport width */
          margin-top: 2rem; /* Increased spacing between taglines */
          animation: fadeIn 2s ease-out;
          margin-top: 5vh;
        }

        .highlight {
          color: #00c6ff; /* Cyan color for highlights */
          text-shadow: 0px 0px 10px rgba(0, 198, 255, 0.6);
          display: inline-block; /* Needed for transform animations */
          transition:
            transform 0.3s ease,
            text-shadow 0.3s ease;
          position: relative;
          cursor: pointer;
        }

        .highlight-innovation:hover {
          transform: translateY(20px); /* Pushes "Innovation" to the right */
          text-shadow: 0px 0px 30px rgba(0, 198, 255, 1); /* Glowing effect */
        }

        .highlight-innovation {
          cursor: pointer;
          color: #00c6ff; /* Cyan color for highlights */
        }

        .highlight-hackhazards {
          cursor: pointer;
          color: #00c6ff; /* Cyan color for highlights */
        }

        .highlight-innovation:hover {
          transform: translateY(20px); /* Pushes "Innovation" to the right */
        }

        .highlight:hover {
          transform: translateY(-50px) scale(1.2); /* Upward motion and scaling */
          color: #8a2be2; /* Purple color with glowing effect */
          text-shadow:
            0 0 15px rgba(138, 43, 226, 0.6),
            0 0 25px rgba(138, 43, 226, 0.2); /* Glowing purple effect */
        }

        /* New rule for HackHazards hover effect */
        .highlight-hackhazards {
          position: relative;
        }

        .highlight-hackhazards::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(
            90deg,
            rgba(138, 43, 226, 1),
            rgba(0, 198, 255, 1)
          ); /* Shiny gradient */
          transition: width 0.3s ease; /* Shiny line effect */
        }

        .highlight-hackhazards:hover::after {
          width: 100%; /* Shiny line grows on hover */
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .tagline-1 {
            font-size: 4vw; /* Adjust font size for smaller screens */
          }

          .tagline-2 {
            font-size: 2vw; /* Adjust font size for smaller screens */
            margin-top: 6vh;
          }

          .main {
            margin-top: 10vh;
            padding-left: 4vw;
            padding-right: 4vw;
            margin-bottom: 1vw;
          }
        }

        @media (max-width: 480px) {
          .tagline-1 {
            font-size: 4vw; /* Adjust font size for smaller mobile screens */
          }

          .tagline-2 {
            font-size: 2vw; /* Adjust font size for smaller mobile screens */
          }

          .main {
            margin-top: 10vh;
            margin-bottom: 2vw;
            padding-left: 6vw;
            padding-right: 6vw;
          }
        }
        @media (min-width: 1440px) {
          .tagline-1 {
            font-size: 4vw; /* Adjust font size for smaller mobile screens */
          }

          .tagline-2 {
            font-size: 2vw; /* Adjust font size for smaller mobile screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
