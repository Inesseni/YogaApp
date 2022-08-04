import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Countdown from 'react-countdown';
import styled from 'styled-components';

import YogaPose1 from "../assets/YogaPose1.jpg"

export default function Pose(props) {


    const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "#palevioletr"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    
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

    const currPose = props.data

    const [secondsToGo, setSecondsToGo] = useState(10000);

    useEffect(() => {
        //when i load another pose with a different duration, i could 
        //restart the timer in here with new poseDuration

        console.log("dshaf");
    }, [poseDuration])


    if (currPose === undefined) {
        return null
    }

    //duration (times 1000 because Timer uses milliseconds)
    const poseDuration = currPose.Duration * 1000;


    //<-----COUNTDOWN (should i make this into a component also? Nested component?)
    // Returns this when countdown finished
    const Completionist = () => <span>
        <Text style={styles.TimerText}>
            You are good to go!
        </Text>
    </span>;

    /* "Dirty" restart of the Timer, just replacing the timer with a new timer. How does Restart work in a clean way?
    const Completionist = () => <Countdown
    date={Date.now() + 10000}
    renderer={renderer}/>;
    */

    // Renderer callback with condition
    const renderer = ({ seconds, completed }) => {
        if (completed) {
            // Render a completed state // Show next Pose and set the timer to data.duration seconds + start ?
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>
                <Text style={styles.TimerText}>
                    Hold this pose for <strong>{seconds}</strong> seconds
                </Text>
            </span>;
        };
    }
    // <-- COUNTDOWN




    return <View style={styles.YogastretchWrapper}>

        <Text style={styles.PoseName}>{currPose.Name}</Text>
        {<Countdown
            date={Date.now() + poseDuration}
            renderer={renderer}
        />}

        <View style={styles.CurrentImage}>
            <img src={YogaPose1} alt="DownwardDog" />
        </View>
        {/*
        <Img_CurrPose>
            <img src={YogaPose1} alt="DownwardDog" />
        </Img_CurrPose>*/}

    </View>
}

const styles = StyleSheet.create({
    CurrentImage: {
        minWidth: 300,
        marginTop: 10,
        borderRadius: 10,
        border: '2px solid rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
    },
    YogastretchWrapper: {
        paddingTop: 40,
        color: '#4A5043',

    },
    PoseName: {
        fontSize: 30,
        fontWeight: 600,
        alignSelf: 'flex-start',
        color: '#fff',
    },
    TimerText: {
        color: '#fff',
    },
})

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