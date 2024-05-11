/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function secBtn(props) {

  return (
    <Link
      data-testid={props.id}
      className={`border-none  ${props.className} `}
      onClick={props.event}
      to={props.route}
    >
      {props.icon}
      {props.name}
    </Link>
  );
}

export default secBtn;
