import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Countdown from "react-countdown";
import styled from "styled-components";

import ProgressBar from "./progressBar";
import { resources } from './bulkImages'
import { MyColors } from "../styles/MyColors";

//currPose.Duration = 100 % (zB 10 sekunden)
//bei 2 sekunden wäre es
//2/10 * 100
export default function Pose(props) {
  const currPose = props.data;
  const [endTime, setEndTime] = useState(Date.now());
  const [mySeconds, setSeconds] = useState(0);

  useEffect(() => {
    if (currPose !== undefined) {
      // Since this variable was _only_ used in one spot, it's a best
      // practice to not create a new variable and just put the value in directly
      setEndTime(Date.now() + currPose.Duration * 1000);
    }
  }, [currPose]);

  if (currPose === undefined) {
    return null;
  }

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
        <img src={resources[currPose.url]} alt="DownwardDog" />
        <ProgressBar
          bgcolor={MyColors.myGreen}
          completed={(mySeconds / currPose.Duration) * 100}
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
    1.: Can i put the 
        <Countdown
            date={Date.now() + 30000}
            renderer={renderer}
        />
    somewhere else an jhust have a variable in the text?

    I'm not sure I undersatnd your question

    2. I have a callback for completed, how can i call a function in the parent? 
    guess the same question like with the button"

    This component can add a "onCompleted" prop and then just call the parent

    Snippets:
    React countdown: https://www.npmjs.com/package/react-countdown#now
*/
