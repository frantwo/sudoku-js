import React, { useState } from "react";
import styled from "styled-components";

export default function Cell () {
    const [value, setValue] = useState("");

    function isOnlyOneNumericalDigit(key, value) {
        return (/^\d+$/.test(key)) && (value.length < 1)
    }

  return (
    <div>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (!isOnlyOneNumericalDigit(e.key, value) ){
            e.preventDefault();
          }
        }}
      />
    </div>
  );
};

const Input = styled.input`
  width: 25px;
  height: 30px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
`;