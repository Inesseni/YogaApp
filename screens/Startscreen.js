import React from "react";
import styled from "styled-components";
import BasicButton from "../components/BasicButton";
import BasicText from "../components/BasicText";
import MyH1 from "../components/MyH1";

const Container = styled.div((props) => ({
  display: "flex",
  minHeight: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: props.red ? "red" : "#9AC2C9",
}));

function Startscreen({ onClick }) {
  return (
    <Container>
      <MyH1 textInput="Welcome back!" />
      <BasicText
        textInput={
          "Stretching keeps the muscles flexible, strong and healthy. Don't bounce, which can cause injury. You'll feel tension during a stretch, but you should not feel pain. Let's start with your daily stretch!"
        }
        maxWidth={330}
      ></BasicText>
      <BasicButton text="Start stretching routine" onClick={onClick} />
    </Container>
  );
}

export default Startscreen;
