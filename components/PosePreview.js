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
            <Text style={styles.NextPoseName} >{nextPose?.name}</Text>
        </View>

        <View style={styles.NextImageThumbnail}>
            <img src={YogaPose2} alt="Warrior" />
        </View>
        {/**how can i use a button inside a component to change values in the parent ? 
        <View style={styles.NextButton} >
            <button onClick={function () { setCurrIndex(CurrIndex + 1) }}>Go to next Pose</button>
        </View>*/}

    </View >

}

const styles = StyleSheet.create({

    nextPoseWrapper: {
        height: 75,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
    },
    NextImageThumbnail: {
        maxWidth: 100,
        flex: 1,
    },
    NextPoseName: {
        fontSize: 30,
        fontWeight: 600,
        alignSelf: 'flex-end',
    },
    NextPoseText: {
        flex: 1,
        textAlign: 'right',
        alignSelf: 'flex-end',

    },
    NextButton: {
        height: 75,
        alignSelf: 'stretch',
    },

})