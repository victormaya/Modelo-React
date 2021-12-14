import React from 'react';

function Input({ id, label, value, setValue, required, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type='text'
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
