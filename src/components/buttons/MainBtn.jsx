import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function MainBtn(props) {
  return (
    <Link
      target={props.target}
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

export default MainBtn;
