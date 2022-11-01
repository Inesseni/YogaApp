import React from "react";
import styled from "styled-components";

const Title = styled.p(() => ({
  fontSize: 40,
  fontWeight: 1000,
  color: "#4A5043",
  fontFamily: "arial",
}));

// Intead of callign these things "myH1" or "basicButton"
// it's very common to give them "useful" names.  So, in my 
// project(s), there's often "title", "subtitle", etc. that way
// the name of the component is more undersatndable for the
// main purpose it serves
function MyH1({ textInput }) {
  return <Title>{textInput}</Title>;
}

export default MyH1;
