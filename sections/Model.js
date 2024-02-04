import React from "react";

const Model = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[15]">
      <section>
        <div className="lg:w-[50vw] w-[90vw] flex flex-col lg:mt-[50px] sm:mt-[150px] ">
          <button
            className="text-white text-xl  place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className="bg-white sm:text-[18px] text-[11px] p-2 rounded ">
            <p className="mx-[20px] py-[5px]">
              <ul class="list-[square]">
                <li>1-year subscription to Wolfram | Alpha Pro</li>
                <li>1-year free hosting on .xyz domain</li>
                <li>Rosenfield - Free Books</li>
                <li>Free access to Echo3D pro plan</li>
                <li>5-year upgrade plan to Taskade premium</li>
                <li>Unlimited One-way mock interviews from InterviewBuddy</li>
                <li>6-month free hosting on Cybrancee</li>
                <li>Beeceptor 1-year Team Plan worth $240</li>
                {/* <li></li>
                <li></li> */}
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Model;
