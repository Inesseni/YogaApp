import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Countdown from "react-countdown";
import ProgressBar from "./progressBar";
import { resources } from "./bulkImages";
import { MyColors } from "../styles/MyColors";

export default function Pose(props) {
  const currPose = props.data;
  const [endTime, setEndTime] = useState(Date.now());
  const [mySeconds, setSeconds] = useState(0);

  useEffect(() => {
    if (currPose !== undefined) {
      // Since this variable was _only_ used in one spot, it's a best
      // practice to not create a new variable and just put the value in directly

      setEndTime(Date.now() + currPose.Duration * 1000);
      //setEndTime(Date.now() + 1000);
    }
  }, [currPose]);

  if (currPose === undefined) {
    return null;
  }
  console.log(currPose.url);

  return (
    <View style={styles.YogastretchWrapper}>
      <Text style={styles.PoseName}>{currPose.Name}</Text>
      <Countdown
        date={endTime}
        renderer={({ seconds }) => (
          <Text style={styles.TimerText}>
            {seconds > 0
              ? `You have ${seconds} seconds left`
              : "You are good to go!"}
          </Text>
        )}
        overtime
        onComplete={props.onComplete}
        onTick={({ seconds }) => setSeconds(currPose.Duration - seconds)}
      />

      <View style={styles.CurrentImage}>
        <img src={resources[currPose.url]} alt={currPose.Name} />
        <ProgressBar
          bgcolor={MyColors.myGreen}
          completed={((mySeconds + 1) / currPose.Duration) * 100}
        />
      </View>
    </View>
  );
}

// If you're going to use StyledComponents you don't need to use StyleSheet.create
// Generally people use either one or the other
const styles = StyleSheet.create({
  CurrentImage: {
    width: 600,
    marginTop: 30,
    borderRadius: 10,
    border: "2px solid rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
  },
  YogastretchWrapper: {
    paddingTop: 40,
    color: "#4A5043",
  },
  PoseName: {
    fontSize: 40,
    fontWeight: 600,
    alignSelf: "flex-start",
    color: "#fff",
  },
  TimerText: {
    fontSize: 20,
    marginTop: 10,
    color: "#fff",
  },
});

/*
    Snippets:
    React countdown: https://www.npmjs.com/package/react-countdown#now
*/
