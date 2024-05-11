/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./styles/cards.css";

function Card(props) {

  return (
    <>
      <input type="checkbox" id={props.dataName} className="hidden" />

      <label
        htmlFor={props.dataName}
        onClick={props.event}
        data-name={props.dataName}
        className={`card flex flex-col justify-center items-center p-6  rounded-md border border-[#303B4A]  w-[180px]  h-[180px] ${props.isActive} `}
      >
        <div className="img-holder w-[90px] h-[65px] flex justify-center">
          <img src={props.img} alt="" className=" max-h-[100%]" />
        </div>
        <h2 className="  text-base pt-2 text-center  capitalize">{props.name}</h2>
      </label>
    </>
  );
}

export default Card;
