import React, { useEffect, useState } from "react";
import ProjectCard from "./projectCards"; 
import { projects } from "../constants/projects";
import { motion } from "framer-motion";

export default function ProjectList() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = Array.from(
    { length: Math.ceil(Object.keys(projects).length / 6) },
    (_, i) => i
  );

  useEffect(() => {
    const sectionElements = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sectionElements).indexOf(entry.target);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handlePaginationClick = (index) => {
    const section = document.querySelector(`#section${index}`);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="container">
      <div className="scrollable">
        {sections.map((_, sectionIndex) => {
          const startIndex = sectionIndex * 6;
          const sectionCards = Object.entries(projects)
            .slice(startIndex, startIndex + 6)
            .map(([key, project]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: "-100vw" }} // Cards start from off-screen to the left
                animate={{ opacity: 1, x: 0 }} // Cards slide in to their position
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 25,
                  delay: 0.3 * (sectionIndex + 1) + 0.1 * (Object.keys(projects).indexOf(key) % 6), // Added additional delay based on card index
                }}
                onClick={() => {
                  window.open(key);
                }}
              >
                <ProjectCard projectInfo={project} />
              </motion.div>
            ));

          return (
            <section key={sectionIndex} id={`section${sectionIndex}`}>
              <div className="grid">
                {sectionCards}
              </div>
            </section>
          );
        })}
      </div>

      {/* Pagination Navigator */}
      <div className="pagination">
        {sections.map((_, index) => (
          <a
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={activeSection === index ? "active" : ""}
            aria-label={`Navigate to Section ${index + 1}`}
          >
            <span />
          </a>
        ))}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          position: relative;
          height: 100%;
          width: 100%;
          overflow: hidden;
          margin-top: 8rem;
          margin-left: 0; /* Removed left margin */
          padding-top: 1%;
          padding-bottom: 2rem;
        }

        .scrollable {
          flex: 1;
          overflow-y: hidden;
          scroll-behavior: smooth;
          height: 100%;
          width: 100%; /* Set the scrollable container to take full width */
          max-width: 1400px;
          padding: 20px;
        }

        section {
          min-height: 100vh; /* Adjusted to fit full screen height */
          padding: 60px 40px 20px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Auto-fit grid for responsiveness */
          gap: 20px;
          padding: 0 10px;
        }

        .pagination {
          position: fixed;
          top: 50%;
          right: 40px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pagination a {
          text-decoration: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 2px solid #0070f3;
          transition: transform 0.3s;
        }

        .pagination a.active {
          background: #0070f3;
          border-color: #0070f3;
          transform: scale(1.2);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .pagination a:hover {
          transform: scale(1.1);
        }

        .pagination span {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        /* Mobile responsiveness */
        @media (max-width: 640px) {
          .container {
            margin-left: 0;
            padding-top: 1rem;
          }
          .scrollable {
            width: 100%; /* Full width on mobile */
            padding: 10px;
          }
          .grid {
            display: block; /* Stacks cards on smaller screens */
            padding: 0; /* Remove extra padding */
          }
          .pagination {
            display: none; /* Hide pagination on mobile */
          }
        }

        /* Medium screen responsiveness (between 640px and 1024px) */
        @media (min-width: 640px) and (max-width: 1024px) {
          .container {
            margin-left: 1.7rem;
            padding-top: 1rem;
          }
          .scrollable {
            width: 90%; /* Adjust width to 90% */
          }
          .pagination {
            display: none; /* Hide pagination on medium screens */
          }
        }

        /* For large screens */
        @media (min-width: 1024px) {
          .scrollable {
            width: 80%; /* Default width for larger screens */
          }
        }

        /* For extra large screens (larger than 1440px) */
        @media (min-width: 1700px) {
          .scrollable {
            width: 100%;
             /* Set the scrollable area to 75% */
             margin-left:19rem;
          }
            .container{
            width:100%;}
             
        }
      `}</style>
    </div>
  );
}
