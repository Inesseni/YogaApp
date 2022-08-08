import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Countdown from "react-countdown";
import styled from "styled-components";

import YogaPose1 from "../assets/YogaPose1.jpg";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "#palevioletr")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 2em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 10px;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

//doesnt work, whyyyy???????? :c
const Img_CurrPose = styled.div`
    minWidth: 500,
    marginTop: 10,
    borderRadius: 10,
    border: '5px solid rgba(0, 0, 0, 0.2)', 
    overflow: 'hidden',
    `;

export default function Pose(props) {
  const currPose = props.data;
  const [endTime, setEndTime] = useState(Date.now());

  useEffect(() => {
    if (currPose !== undefined) {
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
            {seconds > 0 ? `You have ${seconds}s left` : "You are good to go!"}
          </Text>
        )}
        overtime
        onComplete={props.onComplete}
      />

      <View style={styles.CurrentImage}>
        <img src={YogaPose1} alt="DownwardDog" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CurrentImage: {
    minWidth: 300,
    marginTop: 10,
    borderRadius: 10,
    border: "2px solid rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
  },
  YogastretchWrapper: {
    paddingTop: 40,
    color: "#4A5043",
  },
  PoseName: {
    fontSize: 30,
    fontWeight: 600,
    alignSelf: "flex-start",
    color: "#fff",
  },
  TimerText: {
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

    2. I have a callback for completed, how can i call a function in the parent? 
    guess the same question like with the button"



    Snippets:
    React countdown: https://www.npmjs.com/package/react-countdown#now
*/
