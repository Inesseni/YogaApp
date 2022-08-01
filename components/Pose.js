import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Countdown from 'react-countdown';

import YogaPose1 from "../assets/YogaPose1.jpg"

export default function Pose(props) {
    const currPose = props.data
    
    const [secondsToGo, setSecondsToGo] = useState(10000);

    useEffect(() => {
        //when i load another pose with a different duration, i could 
        //restart the timer in here with new secondsToGo
    }, [secondsToGo])


    if (currPose === undefined) {
        return null
    }

    //dummy duration, change to currPose.duration once Elliot resolves backend problems
    const dummyDuration = currPose.id * 10000;


    //<-----COUNTDOWN (should i make this into a component also? Nested component?)
    // Returns this when countdown finished
    const Completionist = () => <span>
        <Text>
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
            <Text>
                Hold this pose for {seconds} seconds 
            </Text>
            </span>;
        };
    }
    // <-- COUNTDOWN




    return <View style={styles.YogastretchWrapper}>

        {<Countdown
            date={Date.now() + dummyDuration}
            renderer={renderer}
        />}
        <Text style={styles.PoseName}>{currPose.name}</Text>

        <View style={styles.CurrentImage}>
            <img src={YogaPose1} alt="DownwardDog" />
        </View>

    </View>
}

const styles = StyleSheet.create({
    CurrentImage: {
        minWidth: 300,
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    YogastretchWrapper: {
        paddingTop: 40,

    },
    PoseName: {
        fontSize: 30,
        fontWeight: 600,
        alignSelf: 'flex-start',
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
    guess the same question like the button"


    Snippets:
    React countdown: https://www.npmjs.com/package/react-countdown#now
*/