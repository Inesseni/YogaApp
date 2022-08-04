import React from "react";
import { StyleSheet, Text, View } from "react-native";

import YogaPose2 from "../assets/YogaPose2.jpg"

export default function PosePreview(props) {

    const nextPose = props.data

    if (nextPose === undefined) {
        return null
    }

    return <View style={styles.nextPoseWrapper}>
        <View>
            <Text style={styles.NextPoseText}>Next:</Text>
            <Text style={styles.NextPoseName} >{nextPose?.Name}</Text>
        </View>

        <View style={styles.NextImageThumbnail}>
            <img src={YogaPose2} alt="Warrior" />
        </View>
        {/**
        <View style={styles.NextButton} >
            <button onClick={function () { setCurrIndex(CurrIndex + 1) }}>Go to next Pose</button>
        </View>*/}

    </View >

}

const styles = StyleSheet.create({

    nextPoseWrapper: {
        height: 75,
        backgroundColor: '#BDD7DB',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 20,
    },
    NextImageThumbnail: {
        maxWidth: 110,
        flex: 1,
        marginLeft: 20,
    },
    NextPoseName: {
        fontSize: 20,
        fontWeight: 600,
        alignSelf: 'flex-end',
        color: '#4A5043',
    },
    NextPoseText: {
        flex: 1,
        textAlign: 'right',
        alignSelf: 'flex-end',
        color: '#4A5043',

    },
    NextButton: {
        height: 75,
        alignSelf: 'stretch',
    },

})