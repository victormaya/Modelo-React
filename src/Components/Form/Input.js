import React from 'react';

function Input({ id, type,  label, value, setValue, required, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        required={required}
        {...props}
      />
    </>
  );
}

export default Input;
