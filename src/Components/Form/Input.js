import React from 'react';

function Input({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeHolder,
  error,
  required,
}) {
  console.log(error);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        required={required}
        placeholder={placeHolder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}
    </>
  );
}

export default Input;
