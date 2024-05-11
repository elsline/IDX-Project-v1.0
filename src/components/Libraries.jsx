/* eslint-disable no-unused-vars */
import React from "react";
import Cards from "./cards/Cards";
import Transition from "./Transition";
function Libraries() {
  return (
    <Transition>
      <section className="frameworks">
        <div className="container flex  pt-40    align-center justify-center">
          <div className="my-auto block">
            <div className="title-links flex   justify-between pb-6">
              <h3 className=" text-[#8B98A9]">New workspace</h3>
            </div>
            <Cards />
          </div>
        </div>
      </section>
    </Transition>
  );
}

export default Libraries;
