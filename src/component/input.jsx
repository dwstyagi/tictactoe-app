import React from "react";

const Input = ({ _id, name, value, type, label }) => {
  return (
    <label htmlFor={_id} className="radio">
      <input
        type={type}
        name={name}
        id={_id}
        value={value}
        className="hidden"
      />
      <span className="label"></span>
      {label}
    </label>
  );
};

export default Input;
