import React from "react";

const Button = ({ text, className, img, onClick = () => {}, imgClass }) => {
  return (
    <button className={`${className} `} onClick={onClick}>
      <img src={img} className={imgClass} /> <span>{text}</span>
    </button>
  );
};
export default Button;
