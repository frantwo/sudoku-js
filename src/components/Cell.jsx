import React, { useState, useRef } from "react";
import styled from "styled-components";

export default function Cell ({cellValue}) {
  const [value, setValue] = useState(cellValue);
  const inputEl = useRef(null);

  const onChange = (event) => {
    setValue(parseInt(event.target.value));
  }

  const onKeyDown = (event) => {
    event.preventDefault();
  }

  function handleFocus() {
    inputEl.current.select();
  }

  return (
    <Input
      type="number"
      ref={inputEl}
      min="1"
      max="9"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
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