import React from "react";

const Button = ({ text, className, img, onClick }) => {
    return (
        <button className={`${className} h-[50px]`} onClick={onClick}>
            <img src={img} /> <span>{text}</span>
        </button>
    );
};
export default Button;
