import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ projectInfo }) => {
  return (
    <div
      className="card border cursor-pointer rounded-2xl shadow-md p-6 max-w-full bg-white transform transition duration-300 hover:scale-105 hover:shadow-lg"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: "1px",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="card-content">
        {/* Project Name with Border Bottom */}
        <h1 className="project-title text-3xl font-bold mb-4 text-white truncate border-b-2 border-gray-400 pb-4">
          {projectInfo["Project Name"]}
        </h1>

        <div className="space-y-6">
          {/* Description */}
          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-gray-300 mb-2">
              Description:
            </h2>
            <div
              className="scrollable text-sm text-gray-400 overflow-y-auto p-2"
              style={{ minHeight: "100px", maxHeight: "100px" }}
            >
              {projectInfo.Description}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="flex flex-col">
            <h2 className="text-xl mb-2 font-medium text-gray-300">
              Technologies Used:
            </h2>
            <div
              className="scrollable text-sm text-gray-400 overflow-y-auto p-2"
              style={{ minHeight: "50px", maxHeight: "50px" }}
            >
              {projectInfo["Technologies Used"].join(", ")}
            </div>
          </div>

          {/* Team Name */}
          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-gray-300 mb-2">
              Team Name:
            </h2>
            <p
              className="text-sm text-gray-400 truncate"
              style={{ minHeight: "30px" }}
            >
              {projectInfo["Team Name"]}
            </p>
          </div>

          {/* GitHub Link */}
          <div className="flex flex-col">
            <a
              href={projectInfo["GitHub Link"]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 text-lg hover:underline"
              style={{ minHeight: "30px" }}
            >
              <FaGithub className="mr-1" /> Visit Repository
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          padding: 1.5rem;
          margin: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border-color: rgba(255, 255, 255, 0.2);
          border-width: 1px;
          color: white;
          transition:
            transform 0.3s,
            box-shadow 0.3s;
          position: relative;
        }

        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          border: 2px solid transparent;
          border-image: linear-gradient(
            to right,
            rgba(255, 0, 150, 0.8),
            rgba(0, 204, 255, 0.8)
          );
          border-image-slice: 1;
          z-index: -1;
          transition: transform 0.5s ease;
          transform: scale(1.1);
        }

        .card:hover::before {
          transform: scale(1);
        }

        .project-title {
          font-size: 1.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
        }

        .scrollable::-webkit-scrollbar {
          width: 3px;
        }

        .scrollable::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .scrollable::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.6);
          width: 12px;
        }

        .scrollable::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }

        /* Mobile responsiveness */
        @media (max-width: 840px) {
          .card {
            padding: 1rem;
            margin: 1rem;
          }
          .project-title {
            font-size: 1.5rem;
          }
          .text-xl {
            font-size: 1rem;
          }
          .text-3xl {
            font-size: 1.75rem;
          }
          .scrollable {
            padding: 0;
            min-height: 60px;
          }
          .m-4 {
            margin: 1rem;
          }
        }

        /* Tablet/Medium screens */
        @media (max-width: 768px) {
          .project-title {
            font-size: 2rem;
          }
          .text-xl {
            font-size: 1.125rem;
          }
          .scrollable {
            min-height: 60px;
            max-height: 60px;
          }
        }

        /* Large screens */
        @media (min-width: 1024px) {
          .card {
            padding: 1.5rem;
            margin: 2rem;
          }
        }
        @media (min-width: 1400px) {
          .card {
            width: 100%;
            padding: 1.5rem;
            margin: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
