import React, { useState, useRef } from 'react';
import styled from 'styled-components';
//
// eslint-disable-next-line react/prop-types
export default function Cell({
  // eslint-disable-next-line react/prop-types
  cellValue, row, column,
}) {
  const [value, setValue] = useState(cellValue);
  const inputEl = useRef(null);

  console.table('cellValue:', value);
  console.table('row:', row);
  console.table('column:', column);

  const onKeyDown = (event) => {
    if (event.key.match(/^\d+$/)) {
      setValue(event.key);
    }
  };

  const handleFocus = () => {
    inputEl.current.select();
  };

  return (
    <Input
      type="text"
      ref={inputEl}
      value={value}
      onKeyDown={(e) => onKeyDown(e)}
      onFocus={handleFocus}
    />
  );
}

const Input = styled.input`
  width: 40px;
  height: 30px;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  maxlenght: 1;
`;
