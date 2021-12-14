import React from 'react';

function Radio({ options, value, setValue, ...props }) {
  return (
    <>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type='radio'
              value={option}
              checked={value === option}
              onChange={({ target }) => {
                setValue(target.value);
              }}
              {...props}
            />
            {option}
          </label>
        );
      })}
    </>
  );
}

export default Radio;
