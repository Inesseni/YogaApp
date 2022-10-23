import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

import YogaPose2 from "../assets/YogaPose2.jpg";

const NextButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: white;
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  border: 0px solid palevioletred;
  border-radius: 10px;
  overflow: hidden;
  height: 80px;
  width: 300px;
  margin-top: 30px;

  &:hover {
    background-color: white;
    color: white;
    border: 2px solid palevioletred;
  }
`;

export default function PosePreview(props) {
  const nextPose = props.data;

  if (nextPose === undefined) {
    return null;
  }

  return (
    <NextButton onClick={props.onClickMe}>
      <View style={styles.nextPoseWrapper}>
        <View style={{ flex: 3 }}>
          <Text style={styles.NextPoseText}>Next:</Text>
          <Text style={styles.NextPoseName}>{nextPose?.Name}</Text>
        </View>

        <View style={styles.NextImageThumbnail}>
          <img src={YogaPose2} alt="Warrior" />
        </View>
      </View>
    </NextButton>
  );
}

const styles = StyleSheet.create({
  nextPoseWrapper: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  NextImageThumbnail: {
    flex: 1,
    alignSelf: "flex-end",
    height: "100%",
  },
  NextPoseName: {
    fontSize: 20,
    fontWeight: 600,
    alignSelf: "flex-start",
    color: "#4A5043",
  },
  NextPoseText: {
    flex: 1,
    alignSelf: "flex-start",
    color: "#4A5043",
  },
});
