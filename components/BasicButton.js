import React from "react";
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "#palevioletr")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 3em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 10px;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

function BasicButton({ text, onClick }) {
  return (
    <div>
      <Button onClick={onClick}>{text}</Button>
    </div>
  );
}

export default BasicButton;
