import React from "react";

const Input = ({
  onChange,
  type,
  value,
  name,
  placeholder,
  autoComplete,
  autoFocus,
  label
}) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
