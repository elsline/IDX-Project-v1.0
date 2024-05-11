/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import MainBtn from "./buttons/MainBtn";
function Terminal(props) {
  return (
    <section className="terminal h-fit  ">
      <div className=" flex  align-center justify-center">
        <div className="block">
          <div className="terminal ">
            <div className="fakeMenu w-[300px] lg:w-[500px]">
              <div className="fakeButtons fakeClose"></div>
              <div className="fakeButtons fakeMinimize"></div>
              <div className="fakeButtons fakeZoom"></div>
            </div>
            <div className="fakeScreen  lg:min-h-48 w-[300px] lg:w-[500px]">
              <p id="myParagraph" className="line1 myParagraph">
                {props.terminal}
              </p>
            </div>
          </div>
        </div>
      </div>
      <MainBtn
        name="Copy"
        event={props.copyEvent}
        className="bg-purple-color ml-auto  transition duration-300 ease-in-out  hover:bg-[#5127a5]  button block w-fit  mt-6"
      />
    </section>
  );
}

export default Terminal;
