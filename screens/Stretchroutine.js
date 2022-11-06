import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProgressBar from "../components/progressBar";
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
  const [CurrIndex, setCurrIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [poseIndex, setPoseIndex] = useState(0);

  // this "updates" every time automatically when the app renders, so every time state variable changes
  const currPose = items[CurrIndex];
  const nextPose = items[CurrIndex + 1];
  const Server_URL = `https://elliottrarden.me/assets/stretches.json`;

  //this runs only once when website opened -> right approach
  //variables used in each .fetch line is the result of the .fetch above
  useEffect(() => {
    fetch(Server_URL)
      .then((response) => response.json())
      .then(function logData(jsn) {
        console.log(jsn.length);
        return jsn;
      })
      .then(function setData(resultOfThePreviousThenStatement) {
        setItems(resultOfThePreviousThenStatement);
      });
  }, []);
  //const myIndex = items.getIndex(item.Name));

  return (
    <Container>
      <PosesContainer>
        <MyUl>
          {items.map((item) => (
            <PoseListItem
              key={item.Name}
              name={item.Name}
              completed={false}
              onClick={function () {
                const myIndex = items.findIndex(
                  (obj) => obj.Name === item.Name
                );
                setCurrIndex(myIndex);
                item.completed = true;
              }}
            />
          ))}
        </MyUl>
      </PosesContainer>
      <MainPoseContainer>
        <Pose
          data={items[CurrIndex % items.length]}
          onComplete={() => {
            items[CurrIndex].completed = true;
            console.log(items[CurrIndex].completed);
          }}
        />

        <PosePreview
          data={items[(CurrIndex + 1) % items.length]}
          onClickMe={function () {
            setCurrIndex(CurrIndex + 1);
          }}
        />
      </MainPoseContainer>
    </Container>
  );
}

export default Stretchroutine;
