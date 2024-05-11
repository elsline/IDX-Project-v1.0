/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// images
import Img1 from "./imgs/bootstrap-svgrepo-com.png";
import Img2 from "./imgs/fontawesome-svgrepo-com.png";
import Img3 from "./imgs/tailwind-svgrepo-com.png";
import Img4 from "./imgs/greensock-svgrepo-com.png";
import Img5 from "./imgs/material-ui-svgrepo-com.png";
import Img6 from "./imgs/react-router-svgrepo-com.png";
import Img7 from "./imgs/swiper-logo.png";
import Img8 from "./imgs/redux-svgrepo-com.png";
import Img9 from "./imgs/styled-components.png";
import Img10 from "./imgs/testing-library.png";
import Img11 from "./imgs/framer-svgrepo-com.png";
// images
import Card from "./Card";
import data from "./json/libraries.json";
import Terminal from "../Terminal";
import Swal from "sweetalert2";
import MainBtn from "../buttons/MainBtn";
import "./styles/cards.css";

function Cards() {
  const [libraries, setLibraries] = useState([]);
  const [terminal, setTerminal] = useState();
  const librariesData = data.libraries;

  const handleLinkClick = (event) => {
    event.preventDefault();
    setTerminal(
      librariesData.map((li) => (
        <>
          {libraries.map((lib, index) => {
            if (lib === li.name) {
              return (
                <>
                  <span key={index} className="block">
                    {li.npm_install}
                  </span>
                </>
              );
            }
          })}
        </>
      ))
    );
  };
  const copyEvent = () => {
    let npmInstalls = [];
    librariesData.forEach((li) => {
      libraries.forEach((lib) => {
        if (lib === li.name) {
          npmInstalls.push(li.npm_install); // Add npm_install to the array
        }
      });
    });
    let textToCopy = npmInstalls.join("\n");
    navigator.clipboard.writeText(textToCopy);
    Swal.fire({
      title: "Copied!",
      text: "Go paste it into the terminal",
      icon: "success",
      confirmButtonText: "ok",
      background: "#10151d",
      color: "white",
    });
  };

  const liName = (event) => {
    const div = event.currentTarget;
    const divName = div.getAttribute("data-name");
    const index = libraries.indexOf(divName);

    if (index !== -1) {
      setLibraries((prevLibraries) =>
        prevLibraries.filter((name) => name !== divName)
      );
    } else {
      setLibraries((prevLibraries) => [...prevLibraries, divName]);
    }
  };

  return (
    <div className="relative flex   flex-col lg:flex-row   items-center justify-center gap-20 flex-wrap">
      <form
        onSubmit={handleLinkClick}
        className="cards grid  md:grid-cols-3 lg:grid-cols-4 gap-10  items-center h-fit my-auto relative  "
      >
        <Card img={Img1} name="Bootstrap" dataName="bootstrap" event={liName} />
        <Card
          img={Img2}
          name="Fontawesome"
          dataName="fontawesome"
          event={liName}
        />
        <Card img={Img3} name="Tailwind" dataName="tailwind" event={liName} />
        <Card img={Img4} name="GSAP" dataName="GSAP" event={liName} />
        <Card
          img={Img5}
          name="Material UI"
          dataName="material"
          event={liName}
        />
        <Card img={Img6} name="React Router" dataName="router" event={liName} />
        <Card img={Img7} name="Swiper.js" dataName="swiper" event={liName} />
        <Card img={Img8} name="redux" dataName="redux" event={liName} />
        <Card
          img={Img10}
          name="testing library"
          dataName="testinglibrary"
          event={liName}
        />
        <Card
          img={Img9}
          name="styled components"
          dataName="styledcomponents"
          event={liName}
        />
        <Card
          img={Img11}
          name="framer motion"
          dataName="framermotion"
          event={liName}
        />
        <button
          type=""
          name="Next"
          className="bg-purple-color lg:absolute right-[0] bottom-[-65px]  transition duration-300 ease-in-out  hover:bg-[#5127a5]  button block w-fit ml-auto mt-6"
        >
          Done
        </button>
      </form>
      <Terminal terminal={terminal} copyEvent={copyEvent} />
    </div>
  );
}

export default Cards;
