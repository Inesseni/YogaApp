import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BasicButton from "./BasicButton";
import BasicText from "./BasicText";
import MyH1 from "./MyH1";

function FinishedRoutine({ onClick }) {
  return (
    <View style={styles.finishedBox}>
      <MyH1 textInput={"FINISHED!"} />
      <BasicText
        textInput={"Come back tomorrow to keep your flexibility!"}
        maxWidth={330}
      ></BasicText>
      <BasicButton text={"Return to Startscreen"} onClick={onClick} />
    </View>
  );
}

export default FinishedRoutine;

const styles = StyleSheet.create({
  finishedBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  finishedText: {
    fontSize: 50,
  },
});
