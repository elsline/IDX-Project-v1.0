/* eslint-disable no-unused-vars */
import React from "react";
import Cards from "./cards/Cards";
import Transition from "./Transition";
function Libraries() {
  return (
    <Transition>
      <section className="frameworks lg:block  hidden">
        <div className="container flex  pt-40    align-center justify-center">
          <div className="my-auto block">
            <div className="title-links flex   justify-between pb-6">
              <h3 className=" text-[#8B98A9]">New workspace</h3>
            </div>
            <Cards />
          </div>
        </div>
      </section>
      <section className="frameworks lg:hidden  block">
        <div className="container flex flex-col h-[100vh]  align-center justify-center">
          <div className="welcome gap-4 lg:gap-8 flex-col flex text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl ">
              Open from Desktop
            </h1>
          </div>
        </div>
      </section>
    </Transition>
  );
}

export default Libraries;
