import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Pose from "../components/Pose";
import PosePreview from "../components/PosePreview";
import PoseListItem from "../components/PoseListItem";
import bulkImages from "../components/bulkImages";

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  backgroundColor: props.red ? "red" : "#9AC2C9",
}));
const MainPoseContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "center",
}));
const PosesContainer = styled.div((props) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
}));

const MyUl = styled.ul((props) => ({
  margin: 0,
  marginLeft: -40,
}));

function Stretchroutine() {
  //state variables, if changes, site rerenders. u want to render little as possible
  const [CurrIndex, setCurrIndex] = useState(0);
  const [items, setItems] = useState([]);

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

  return (
    <Container>
      <PosesContainer>
        <MyUl>
          {items.map((item) => (
            <PoseListItem
              key={item.key}
              name={item.Name}
              onClick={function () {
                setCurrIndex(item.key);
              }}
            />
          ))}
        </MyUl>
      </PosesContainer>
      <MainPoseContainer>
        <Pose data={items[CurrIndex % items.length]} onComplete={() => {}} />
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
