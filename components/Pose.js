import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Countdown from "react-countdown";
import styled from "styled-components";

import ProgressBar from "./progressBar";
import YogaPose1 from "../assets/YogaPose1.jpg";
import { MyColors } from "../styles/MyColors";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: MyColors.Primary;
  color: ${(props) => (props.primary ? "white" : MyColors.Primary)};

  font-size: 1em;
  margin: 2em;
  padding: 0.25em 1em;
  border: 2px solid #ea9999;
  border-radius: 10px;
  &:hover {
    background-color: #ea9999;
    color: white;
  }
`;

const Img_CurrPose = styled.div`
    minWidth: 500,
    marginTop: 10,
    borderRadius: 10,
    border: '5px solid rgba(0, 0, 0, 0.2)', 
    overflow: 'hidden',
    `;

    //currPose.Duration = 100 % (zB 10 sekunden)
    //bei 2 sekunden wäre es
    //2/10 * 100
export default function Pose(props) {
  const currPose = props.data;
  const [endTime, setEndTime] = useState(Date.now());
  const [mySeconds, setSeconds] = useState(0);

  useEffect(() => {
    if (currPose !== undefined) {
      setEndTime(Date.now() + finalCurrPoseDuration);
    }
  }, [currPose]);

  if (currPose === undefined) {
    return null;
  }
  const finalCurrPoseDuration = currPose.Duration * 1000;
  const currSeconds = 0;
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
        
        onTick={({seconds}) => 
      //    console.log(currPose.Duration - seconds)
      setSeconds(currPose.Duration - seconds)
    }
      />

      <View style={styles.CurrentImage}>
        <img src={YogaPose1} alt="DownwardDog" />
        <ProgressBar  bgcolor={MyColors.myGreen} completed={mySeconds / currPose.Duration * 100} />
      </View>
      
     
    </View>
  );
}

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

    2. I have a callback for completed, how can i call a function in the parent? 
    guess the same question like with the button"



    Snippets:
    React countdown: https://www.npmjs.com/package/react-countdown#now
*/
