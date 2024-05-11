/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Transition from "./Transition";
import MainBtn from "./buttons/MainBtn";

function Welcome() {
  return (
    <Transition>
      <section>
        <div className="container flex flex-col  align-center justify-center">
          <div className="welcome gap-4 lg:gap-8 flex-col flex text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl ">
              Welcome to{" "}
              <span className=" block md:inline lg:inline text-purple-color   font-light text-5xl md:text-5xl lg:text-6xl">
                IDX
              </span>{" "}
              Project
            </h1>
            <p className=" text-[#8B98A9] text-sm  md:text-base lg:text-base  ">
              Add your libraries easily and start your project immediately
            </p>
          </div>
          <div className="btns flex justify-center gap-5 pt-12">
            <MainBtn
              id="main"
              name="Get started"
              route={"/libraries"}
              className="bg-purple-color  transition duration-300 ease-in-out  hover:bg-[#5127a5]  button "
            />
            <MainBtn
              id="sec"
              route="https://github.com/elsline/IDX-Project-v1.0"
              target="_blanktarget"
              icon={<i className="fa-brands fa-github text-xl"></i>}
              name="Github"
              className="bg-white text-black flex  items-center gap-2 button "
            />
          </div>
        </div>
      </section>
    </Transition>
  );
}

export default Welcome;
