import React from "react";
import styled from "styled-components";

const Button = styled.button(() => ({
  display: "flex",
  width: "100%",
  maxHeight: 50,
  flexDirection: "column",
  padding: 8,
  borderWidth: 0,
  marginBottom: 2,
}));

const PoseName = styled.text(() => ({
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
