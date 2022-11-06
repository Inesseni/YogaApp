import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Pose from "../components/Pose";
import PosePreview from "../components/PosePreview";
import PoseListItem from "../components/PoseListItem";
import { MyColors } from "../styles/MyColors";

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  backgroundColor: MyColors.lightBG,
}));
const MainPoseContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "center",
}));
const PosesContainer = styled.div((props) => ({
  height: "100vh",
  display: "flex",
  maxWidth: "300px",
  flexDirection: "column",
  backgroundColor: MyColors.lightBG,
  overflow: "hidden",
  overflowY: "scroll",
}));

const MyUl = styled.ul((props) => ({
  margin: 0,
  marginLeft: -40,
}));
//let ScreenHeight = Dimensions.get("window").height;

function Stretchroutine() {
  //state variables, if changes, site rerenders. u want to render little as possible
  const [currIndex, setCurrIndex] = useState(0);
  const [items, setItems] = useState([]);

  // this "updates" every time automatically when the app renders, so every time state variable changes
  const Server_URL = `https://elliottrarden.me/assets/stretches.json`;

  //this runs only once when website opened -> right approach
  //variables used in each .fetch line is the result of the .fetch above
  useEffect(() => {
    fetch(Server_URL)
      .then((response) => response.json())
      .then(function setData(resultOfThePreviousThenStatement) {
        setItems(resultOfThePreviousThenStatement);
      });
  }, []);

  const allCompleted = items.every((item) => item.completed);

  // if current pose is already completed, jump to next one
  if (items[currIndex]?.completed && !allCompleted) {
    setCurrIndex((currIndex + 1) % items.length);
  }

  return (
    <Container>
      <PosesContainer>
        <MyUl>
          {items.map((item, index) => (
            <PoseListItem
              key={item.Name}
              name={item.Name}
              completed={item.completed}
              onClick={function () {
                setCurrIndex(index);
              }}
            />
          ))}
        </MyUl>
      </PosesContainer>
      {allCompleted ? (
        <Pose // TODO: finished screen
          data={items[0]}
        />
      ) : (
        <MainPoseContainer>
          <Pose
            data={items[currIndex]}
            onComplete={() => {
              // you can only change items by setting it again
              // You can only changes _state_ variables with _setState_ functions (bc its from the useState hook)
              const nextItems = items;
              nextItems[currIndex].completed = true;
              setItems(nextItems);
              setCurrIndex((currIndex + 1) % items.length);
            }}
          />

          <PosePreview
            data={items[currIndex]}
            onClickMe={function () {
              setCurrIndex((currIndex + 1) % items.length);
            }}
          />
        </MainPoseContainer>
      )}
    </Container>
  );
}

export default Stretchroutine;
