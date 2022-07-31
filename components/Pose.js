import React from "react";
import { StyleSheet,Text, View } from "react-native";

import YogaPose1 from "../assets/YogaPose1.jpg"

export default function Pose(props) {

    const currPose = props.data

    if(currPose === undefined) {
        return null
    }

    return <View style={styles.YogastretchWrapper}>
        <Text>Do this Yoga pose for 3 Minutes:</Text>
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

