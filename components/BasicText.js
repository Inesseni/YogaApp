import React from "react";
import styled from "styled-components";

const MyText = styled.p((props) => ({
  fontSize: 15,
  color: "#4A5043",
  fontFamily: "sans-serif",
  margin: 10,
}));

function BasicText({ textInput, maxWidth }) {
  return <MyText style={{ maxWidth: maxWidth }}>{textInput}</MyText>;
}

export default BasicText;
