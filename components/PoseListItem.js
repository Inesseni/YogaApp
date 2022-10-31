import React from "react";
import styled from "styled-components";

/*
const Button = styled.button(() => ({
  display: "flex",
  width: "100%",
  maxHeight: 50,
  flexDirection: "column",
  padding: 8,
  borderWidth: 0,
  marginBottom: 2,
  
}));
*/

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: white;
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  border: 2px solid white;
  border-radius: 10px;
  overflow: hidden;
  max-height: 50px;
  width: 100%;
  margin-top: 2px;

  &:hover {
    background-color: white;
    color: white;
    border: 2px solid palevioletred;
  }
`;

const PoseName = styled.p(() => ({
  fontSize: 15,
  color: "#4A5043",
  fontFamily: "sans-serif",
  textAlign: "left",
}));

function PoseListItem({ name, completed, onClick }) {
  return (
    <Button onClick={onClick}>
      <PoseName>{name}</PoseName>
    </Button>
  );
}

export default PoseListItem;
