import React from "react";
import styled from "styled-components";

const Title = styled.text(() => ({
  fontSize: 40,
  fontWeight: 1000,
  color: "#4A5043",
  fontFamily: "arial",
}));

function MyH1({ textInput }) {
  return <Title>{textInput}</Title>;
}

export default MyH1;
