import React from "react";

const Button = ({
  type,
  text,
  className,
  img,
  onClick = () => {},
  imgClass,
}) => {
  return (
    <button type={type} className={`${className} `} onClick={onClick}>
      <img src={img} className={imgClass} /> <span>{text}</span>
    </button>
  );
};
export default Button;
