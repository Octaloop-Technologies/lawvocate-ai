import React from "react";
import "./input.scss";
const Input = ({
  label,
  inputType,
  wrapperClasses,
  labelClass,
  onChange,
  name,
  id,
  value,
  placeholder,
  isRequired = false,
}) => {
  return (
    <>
      <div className={`input-wrapper ${wrapperClasses}`}>
        <label htmlFor={id} className={labelClass}>
          {label}{" "}
          {isRequired && <span className="gfield_required">(Required)</span>}
        </label>
        <input
          type={inputType}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
export default Input;
