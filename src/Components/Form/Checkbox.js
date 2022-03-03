/* eslint-disable react/prop-types */
import React from 'react';

function Checkbox({ options, value, setValue, ...props }) {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(
        value.filter((itemValue) => {
          return itemValue !== target.value;
        }),
      );
    }
  }

  return (
    <>
      {options.map((option) => {
        return (
          <label key={option}>
            <input type="checkbox" value={option} onChange={handleChange} checked={value.includes(option)} {...props} />
            {option}
          </label>
        );
      })}
    </>
  );
}

export default Checkbox;
